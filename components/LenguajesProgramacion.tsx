interface Lenguaje {
  nombre: string;
  nivel: string;
}

interface LenguagesProgramacionData {
  lenguajesProgramacion: Lenguaje[];
}

const Languages: React.FC<LenguagesProgramacionData> = ({ lenguajesProgramacion }) => {
  return (
    <div className="mb-4">
      <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Lenguajes de programación</h2>
      <ul className="text-blanco font-Poppins">
        {lenguajesProgramacion.map((language, index) => (
          <li key={index}>
            <strong>{language.nombre}:</strong> {language.nivel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;