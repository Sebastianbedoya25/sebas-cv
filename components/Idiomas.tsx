interface Lenguaje {
  nombre: string;
  nivel: string;
}

interface LenguagesData {
  idiomas: Lenguaje[];
}

const Languages: React.FC<LenguagesData> = ({ idiomas }) => {
  return (
    <div className="mb-4">
      <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Idiomas</h2>
      <ul className="text-blanco font-Poppins">
        {idiomas.map((language, index) => (
          <li key={index}>
            <strong>{language.nombre}:</strong> {language.nivel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;