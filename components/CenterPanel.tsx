import InfoAdicional from "./InfoAdicional";

const CenterPanel = () => {
    return (
    <div>
        <div className="rounded-lg grid justify-center bg-fondo p-2 flex items-stretch grid grid-cols-2 gap-2">
            <div className="bg-fondo grid grid-cols-1 ">
                <h1 className="grid grid-cols-1 gap-4 content-end font-medium font-bold font-Poppins">
                    <p className="text-6xl text-azul">Soy Sebastián Bedoya</p>
                </h1>
                <div>
                    <div className="text-3xl text-left gap-2 flex text-blanco">Ingeniero de sistemas
                        
                    </div>
                    
                </div>
                <div className="rounded-lg flex pb-4"><InfoAdicional /></div>
                
            </div>
            <div className="bg-fondo flex items-end grid justify-items-center">
            <img
                src="profile.JPG"
                alt="Foto del estudiante"
                className="rounded-lg mb-4"
            />
            </div>

            
            
        </div>
        
        <div className="rounded-lg h-56 grid justify-center bg-fondo p-2 mt-4">
            <div></div>
            <div></div>
        </div>
    </div>
    );
  };
  
  export default CenterPanel;