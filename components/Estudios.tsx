
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
      <table className="min-w-full divide-y text-fondo bg-azul rounded-lg">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-xl text-bold uppercase tracking-wider font-Epilogue">
              Nivel
            </th>
            <th className="px-6 py-3 text-left text-xl text-bold uppercase tracking-wider font-Epilogue">
              Fecha de Estudio
            </th>
            <th className="px-6 py-3 text-left text-xl text-bold uppercase tracking-wider font-Epilogue">
              Entidad
            </th>
            <th className="px-6 py-3 text-left text-xl text-bold uppercase tracking-wider font-Epilogue">
              Título
            </th>
          </tr>
        </thead>
        <tbody className="bg-azul text-fondo divide-y font-Poppins font bold text-medium">
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