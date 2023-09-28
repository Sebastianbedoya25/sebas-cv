interface datosContacto {
    ciudad: string;
    telefono: string;
    email: string;
  }
  
  const Contacto: React.FC<datosContacto> = ({ ciudad, telefono, email }) => {
    return (
      <div className="mb-4">
        <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Datos de Contacto</h2>
        <ul className="list-disc">
        <div className="mb-2">
            <p className="text-blanco font-bold font-Poppins">Ciudad:</p>
            <p className="text-blanco font-Poppins">{ciudad}</p>
          </div>
          <div className="mb-2">
            <p className="text-blanco font-bold font-Poppins">Teléfono:</p>
            <p className="text-blanco font-Poppins">{telefono}</p>
          </div>
          <div className="mb-2">
            <p className="text-blanco font-bold font-Poppins">Correo electrónico:</p>
            <p className="text-blanco font-Poppins">{email}</p>
          </div>
          {/* Agrega más datos de contacto según sea necesario */}
        </ul>
      </div>
    );
  };
  
  export default Contacto;