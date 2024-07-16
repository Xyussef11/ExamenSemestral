import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registro_Avatar from './components/Registro_Avatar';
import Registro from './components/Registro';
import Inicio from './components/Inicio'

import Buscar from './components/Buscar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro_avatar" element={<Registro_Avatar />} />
      <Route path="/registro" element={<Registro/>}/>
      <Route path="/inicio" element={<Buscar/>}/>
    </Routes>
  );
};

export default App;

