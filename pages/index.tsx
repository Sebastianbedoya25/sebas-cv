import React from 'react';
import LeftPanel from '../components/LeftPanel';
import Perfil from '@/components/Perfil';
import InfoAdicional from '@/components/InfoAdicional';

const Home = () => {
  
  

  return (
    <div className="flex">
      <LeftPanel />
      {/* Aquí colocarás el contenido central con scroll vertical */}
    </div>
  );
};

export default Home;
