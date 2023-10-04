import InfoAdicional from "./InfoAdicional";
import Conocimientos from "./Conocimientos";
import Estudios from "./Estudios";

const CenterPanel = () => {

    const conocimientosData = [
        { titulo: 'ABAP', imagenSrc: 'sap.png', descripcion: 'HCM' },
        { titulo: 'Java', imagenSrc: 'java.png', descripcion: 'Desarrollo backend' },
        { titulo: 'Fotografía', imagenSrc: 'photo-camera.png', descripcion: 'Retrato, edición' },
        { titulo: 'Automatización', imagenSrc: 'test.png', descripcion: 'Cucumber, Selenium' },
        { titulo: 'Scrum', imagenSrc: 'agile.png', descripcion: 'Agile coach' },
    ];

    const estudiosData = [
        { titulo: 'Secundaria', fechaEstudio: '2013', entidad: 'I. E. La Paz', grado: 'Bachiller técnico'},
        { titulo: 'Técnica', fechaEstudio: '2012 - 2013', entidad: 'Abogados Educando S.A.S', grado: 'Técnico en sistemas'},
        { titulo: 'Tecnológica', fechaEstudio: '2014 - 2016', entidad: 'Universidad de Antioquia', grado: 'Tecnólogo en Regencia de Farmacia'},
        { titulo: 'Universitaria', fechaEstudio: '2017 - Actualidad', entidad: 'Universidad de Antioquia', grado: 'Ingeniero de Sistemas'},
        { titulo: 'Curso', fechaEstudio: '2020', entidad: 'Universidad Pontificia Bolivariana', grado: 'Introducción al desarrollo web'},
    ];


    return (
        <div>
            <div className="rounded-lg grid justify-center bg-blanco flex items-stretch grid grid-cols-2 gap-2">
                <div className="bg-blanco grid grid-cols-1 ">
                    <h1 className="grid grid-cols-1 gap-4 content-end font-medium font-bold font-Poppins">
                        <p className="text-6xl text-fondo pl-16">Soy Sebastián Bedoya</p>
                    </h1>
                    <div>
                        <div className="text-3xl text-left gap-2 flex text-azul font-Poppins pl-16">Ingeniero de sistemas

                        </div>
                        <div className="rounded-lg flex pb-4 pl-16 font-Epilogue"><InfoAdicional /></div>
                    </div>
                </div>
                <div className=" flex items-end grid justify-items-center">
                    <img
                        src="profile.JPG"
                        alt="Foto del estudiante"
                        className="rounded-lg w-80 mb-4"
                    />
                </div>
                <div className="bg-fondo text-azul text-3xl font-bold text-center p-4 col-start-1 col-end-3 font-Epilogue">Conocimientos</div>
            </div>

            <div className="grid justify-center bg-blanco ">
                <Conocimientos conocimientos={conocimientosData} />
            </div>

            
            <div className="bg-fondo text-azul text-3xl font-bold text-center p-4 col-start-1 col-end-3 font-Epilogue">Estudios</div>
            <div className="grid justify-center bg-blanco pt-4 ">
                <Estudios data={estudiosData} />
            </div>
        </div>
    );
};

export default CenterPanel;