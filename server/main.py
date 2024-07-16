from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

# Configuración de la conexión a la base de datos
db_host = 'localhost'
db_user = 'root'
db_password = '123456789'
db_name = 'conserva'

# Crear la conexión
db = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)

# Crear una instancia de Flask
app = Flask(__name__)
CORS(app)  # Habilitar CORS para toda la aplicación

@app.route("/products", methods=["POST"])
def agregar_producto():
    data = request.get_json()
    nombre = data.get('name')
    precio = data.get('price')
    descripcion = data.get('description')
    imagen_url = data.get('imageUrl')
    usuario_id = data.get('usuarioId')

    cursor = db.cursor()
    sql = "INSERT INTO productos (nombre, precio, descripcion, imagen_url, usuario_id) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(sql, (nombre, precio, descripcion, imagen_url, usuario_id))
    db.commit()
    cursor.close()

    return jsonify({'mensaje': 'Producto agregado exitosamente'}), 200

@app.route("/registro", methods=["POST"])
def registro_usuario():
    data = request.get_json()
    nombre = data.get('nombre')
    apellido = data.get('apellido')
    telefono = data.get('telefono')
    correo = data.get('email')
    contrasena = data.get('password')

    cursor = db.cursor()
    sql = "INSERT INTO usuarios (nombre, apellido, telefono, email, contrasena) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(sql, (nombre, apellido, telefono, correo, contrasena))
    db.commit()
    usuario_id = cursor.lastrowid
    cursor.close()

    return jsonify({
        'mensaje': 'Usuario registrado exitosamente',
        'usuario': {
            'usuario_id': usuario_id,
            'nombre': nombre,
            'apellido': apellido,
            'email': correo
        }
    }), 200

@app.route("/login", methods=["POST"])
def login_user():
    data = request.get_json()
    correo = data.get('email')
    contrasena = data.get('password')

    cursor = db.cursor()
    sql = "SELECT * FROM usuarios WHERE email=%s AND contrasena=%s"
    cursor.execute(sql, (correo, contrasena))
    usuario = cursor.fetchone()
    cursor.close()

    if usuario:
        return jsonify({
            'mensaje': 'Inicio de sesión exitoso',
            'usuario': {
                'usuario_id': usuario[0],
                'nombre': usuario[1],
                'apellido': usuario[2],
                'email': usuario[3]
            }
        }), 200
    else:
        return jsonify({'mensaje': 'Correo y/o contraseña incorrectos'}), 401

@app.route("/saveAvatar", methods=["POST"])
def save_avatar():
    data = request.get_json()
    usuario_id = data.get('usuario_id')
    avatar = data.get('avatar')

    cursor = db.cursor()
    sql = "UPDATE usuarios SET avatar=%s WHERE usuario_id=%s"
    cursor.execute(sql, (avatar, usuario_id))
    db.commit()
    cursor.close()

    return jsonify({'mensaje': 'Avatar guardado exitosamente'}), 200

@app.route("/getAvatar", methods=["GET"])
def get_avatar():
    usuario_id = request.args.get('usuario_id')

    cursor = db.cursor()
    sql = "SELECT avatar FROM usuarios WHERE usuario_id=%s"
    cursor.execute(sql, (usuario_id,))
    avatar = cursor.fetchone()
    cursor.close()

    if avatar:
        return jsonify({'avatar': avatar[0]}), 200
    else:
        return jsonify({'mensaje': 'Usuario no encontrado'}), 404
@app.route("/products", methods=["GET"])
def obtener_productos():
    usuario_id = request.args.get('usuarioId')

    cursor = db.cursor()
    sql = "SELECT * FROM productos WHERE usuario_id=%s"
    cursor.execute(sql, (usuario_id,))
    productos = cursor.fetchall()
    cursor.close()

    product_list = []
    for producto in productos:
        product_list.append({
            'producto_id': producto[0],
            'nombre': producto[1],
            'precio': producto[2],
            'descripcion': producto[3],
            'imagen_url': producto[4],
            'usuario_id': producto[5]
        })

    return jsonify({'products': product_list}), 200
if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=8080)
