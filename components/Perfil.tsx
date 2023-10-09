interface datosPerfil {
  nombre: string;
  rol: string;
}

const Perfil: React.FC<datosPerfil> = ({ nombre, rol }) => {

  return (
    <div className="bg-fondo rounded-lg flex grid justify-items-left">
      <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Información Personal</h2>
      <img
        src="profile_small.JPG"
        alt="Foto del estudiante"
        className="w-32 rounded-full mb-4 "
      />
      <p className="text-blanco font-bold font-Poppins">{nombre}</p>
      <p className="text-blanco font-Poppins ">{rol}</p>
    </div>
  );
};

export default Perfil;


