import InfoAdicional from "./InfoAdicional";
import { PiApertureBold } from "react-icons/pi";
import { VscBeaker } from "react-icons/vsc";

const CenterPanel = () => {
    return (
    <div>
        <div className="rounded-lg grid justify-center bg-blanco p-16 flex items-stretch grid grid-cols-2 gap-2">
            <div className="bg-blanco grid grid-cols-1 ">
                <h1 className="grid grid-cols-1 gap-4 content-end font-medium font-bold font-Poppins">
                    <p className="text-6xl text-fondo">Soy Sebastián Bedoya</p>
                </h1>
                <div>
                    <div className="text-3xl text-left gap-2 flex text-azul font-Poppins">Ingeniero de sistemas
                        
                    </div>
                    <div className="rounded-lg flex pb-4"><InfoAdicional /></div>    
                </div>
                
                
            </div>
            <div className=" flex items-end grid justify-items-center">
                <img
                    src="profile.JPG"
                    alt="Foto del estudiante"
                    className="rounded-lg w-80 mb-4"
                />
            </div>

            
            
        </div>
        
        <div className=" grid justify-center bg-fondo">
            <div className="bg-fondo text-blanco font-Poppins text-4xl text-center">Conocimientos</div>
            <div className="text-blanco grid grid-cols-3 gap-2 p-4">
                <div className="w-28"><PiApertureBold/></div>

                <div className="text-center content-center justify-center">
                    <div className="">Título</div>
                    <div className="text-8xl w-28"><VscBeaker/></div>
                    <div>descripción</div>
                </div>
                
            </div>
            
        </div>
    </div>
    );
  };
  
  export default CenterPanel;