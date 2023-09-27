import React from 'react';
import LeftPanel from '../components/LeftPanel';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <LeftPanel />
      {/* Aquí colocarás el contenido central con scroll vertical */}
    </div>
  );
};

export default Home;
