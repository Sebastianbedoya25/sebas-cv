// components/Profile.tsx

import React from 'react';
import InfoAdicional from './InfoAdicional';

interface datosPerfil {
  nombre: string;
  rol: string;
}

const Perfil: React.FC<datosPerfil> = ({nombre, rol}) => {

  return (
    <div className="bg-fondo rounded-lg w-full">
      <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Información Personal</h2>
            <img
                src="profile.JPG"
                alt="Foto del estudiante"
                className="w-40 rounded-full mb-4 "
            />
            
            <p className="text-blanco font-bold font-Poppins">{nombre}</p>
            <p className="text-blanco font-Poppins">{rol}</p>
      
      <div className="text-center p-2">
        {/* Llamamos al diálogo */}
        <InfoAdicional />
      </div>
    </div>
  );
};

export default Perfil;


