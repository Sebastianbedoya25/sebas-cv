const LeftPanel: React.FC = () => {
    const nombre = "SEBASTIÁN BEDOYA RESTREPO"
    const rol = "Ingeniero de Sistemas"
    const ciudad = "La Ceja, ANT"
    const telefono = "3142474248"
    const mail = "sebastianbedoya25@gmail.com"
    const habilidadUno = "Agilismo"
    const habilidadDos = "Trabajo en equipo"
    return (
      <div className="bg-fondo p-4 h-full flex flex-col" >
        {/* Información Personal */}
        <div className="mb-6">
          <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Información Personal</h2>
            <img
                src="profile.JPG"
                alt="Foto del estudiante"
                className="w-40 rounded-full mb-4"
            />
            
            <p className="text-blanco font-bold font-Poppins">{nombre}</p>
            <p className="text-blanco font-Poppins">{rol}</p>
          
        </div>
  
        {/* Datos de Contacto */}
        <div className="mb-4">
          <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Datos de Contacto</h2>
          <div className="mb-2">
            <p className="text-blanco font-Poppins">Ciudad:</p>
            <p className="text-blanco font-Poppins">{ciudad}</p>
          </div>
          <div className="mb-2">
            <p className="text-blanco font-Poppins">Teléfono:</p>
            <p className="text-blanco font-Poppins">{telefono}</p>
          </div>
          <div className="mb-2">
            <p className="text-blanco font-Poppins">Correo electrónico:</p>
            <a className="text-blanco font-Poppins" href={mail}>{mail}</a>
            
          </div>
        </div>
  
        {/* Idiomas */}
        <div className="mb-4">
          <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Idiomas</h2>
          <div>
            <p className="text-blanco font-Poppins">Idioma 1: Español (100%)</p>
            <p className="text-blanco font-Poppins">Idioma 2: Inglés (50%)</p>
          </div>
        </div>
  
        {/* Lenguajes de Programación */}
        <div className="mb-4">
          <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Lenguajes de Programación</h2>
          <div>
            <p className="text-blanco font-Poppins">Java (75%)</p>
            <p className="text-blanco font-Poppins">JavaScript (65%)</p>
          </div>
        </div>
  
        {/* Habilidades Extra */}
        <div>
          <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Habilidades Extra</h2>
          <p className="text-blanco font-Poppins">Habilidad 1: {habilidadUno}</p>
          <p className="text-blanco font-Poppins">Habilidad 2: {habilidadDos}</p>
        </div>
      </div>
    );
  };
  
  export default LeftPanel;