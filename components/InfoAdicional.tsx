import React, { useState } from 'react';


const InfoAdicional = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleMouseEnter = () => {
    setDialogOpen(true);
  };

  const handleMouseLeave = () => {
    setDialogOpen(false);
  };

  return (
    <div
      className="bg-fondo rounded-lg"
      onMouseLeave={handleMouseLeave}
    >
      {/* Botón "Ver Más" */}
      
      <span className="text-azul hover:text-blanco rounded-lg "
      onMouseEnter={handleMouseEnter}
      >
        Ver Más
        
      </span>


      {/* Diálogo de Información Adicional */}
      {isDialogOpen && (
        <div className="bg-fondo rounded-lg ">
          <h2 className="text-azul font-Epilogue text-xl font-bold mb-4">Información Adicional</h2>
        <div>
      <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
        Soy estudiante de Ingeniería de Sistemas de la Universidad de Antioquia del séptimo semestre, técnico en sistemas, con experiencia en mesa de ayuda en el área de TI y en el rol de ingeniero de software, automatizador de pruebas funcionales y pruebas de performance. Conozco la importancia del trabajo en equipo, poseo  apacidad de adaptación y manejo excelente de relaciones interpersonales. Soy comprometido, perseverante, dispuesto al aprendizaje. Soy dedicado en mis funciones para poder  cumplir las metas del proyecto.
      </p>
      </div>
      

        </div>
      )}
      
    </div>
    
  );
};

export default InfoAdicional;

