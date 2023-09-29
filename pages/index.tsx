import React from 'react';
import LeftPanel from '../components/LeftPanel';
import CenterPanel from '../components/CenterPanel';
import RightPanel from '../components/RightPanel';

const Home = () => {
  return (
    <div className='items-stretch w-screen h-screen grid grid-cols-6 gap-2'>
      <div className='p-2 bg-fondo col-start-1'><LeftPanel /></div>
      <div className='bg-azul p-2 col-start-2 col-end-12'><CenterPanel /></div>
      <div className='bg-fondo p-2 grid col-start-12'><RightPanel /></div>
    </div>
    
    
  );
};

export default Home;
