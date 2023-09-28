interface Habilidad {
    nombre: string;
    nivel: string;
  }
  
  interface HabilidadesData {
    habilidades: Habilidad[];
  }
  
  const Habilidades: React.FC<HabilidadesData> = ({ habilidades }) => {
    return (
      <div className="mb-4">
        <h2 className="text-azul text-xl font-bold mb-2 font-Epilogue">Habilidades</h2>
        <ul className="text-blanco font-Poppins">
          {habilidades.map((habilidad, index) => (
            <li key={index}>
              <strong>{habilidad.nombre}:</strong> {habilidad.nivel}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Habilidades;