interface Conocimiento {
    titulo: string;
    imagenSrc: string;
    descripcion: string;
}

interface ConocimientosData {
    conocimientos: Conocimiento[];
}

const Conocimientos: React.FC<ConocimientosData> = ({ conocimientos }) => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
            {conocimientos.map((conocimiento, index) => (
                <div key={index} className="p-4 shadow-md rounded-lg bg-azul">
                    <h3 className="text-xl font-bold mb-2 text-center font-Epilogue">{conocimiento.titulo}</h3>
                    <img
                        src={conocimiento.imagenSrc}
                        alt={conocimiento.titulo}
                        className="w-28 h-28 mx-auto mb-4"
                    />
                    <p className="text-center font-Poppins">{conocimiento.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default Conocimientos;