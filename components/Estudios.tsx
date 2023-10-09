
interface EstudiosData {
    titulo: string;
    fechaEstudio: string;
    entidad: string;
    grado: string;
  }
  
  interface EstudiosTableProps {
    data: EstudiosData[];
  }
  
  const EstudiosTable: React.FC<EstudiosTableProps> = ({ data }) => {
    return (
      <table className="min-w-full divide-y text-fondo bg-azul rounded-lg ">
        <thead className="font-Epilogue text-bold uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left text-xl">
              Nivel
            </th>
            <th className="px-6 py-3 text-left text-xl">
              Fecha de Estudio
            </th>
            <th className="px-6 py-3 text-left text-xl">
              Entidad
            </th>
            <th className="px-6 py-3 text-left text-xl">
              Título
            </th>
          </tr>
        </thead>
        <tbody className="bg-azul text-fondo divide-y font-Poppins text-medium">
          {data.map((estudio, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap ">
                {estudio.titulo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {estudio.fechaEstudio}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {estudio.entidad}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {estudio.grado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default EstudiosTable;