import Contacto from "./Contacto";
import Perfil from "./Perfil";
import Idiomas from "./Idiomas";
import LenguajesProgramacion from "./LenguajesProgramacion";
import Habilidades from "./Habilidades";

const LeftPanel = () => {
    
  const idiomasData = [
    { nombre: 'Inglés', nivel: 'Medio' },
    { nombre: 'Español', nivel: 'Nativo' },
  ];

  const lenguajesProgramacionData = [
    { nombre: 'Java', nivel: '(60%)' },
    { nombre: 'JavaScript', nivel: '(58%)' },
  ];

  const habilidadesData = [
    { nombre: 'Agilismo', nivel: 'Alto' },
    { nombre: 'Trabajo en equipo', nivel: 'Alto' },
  ];

    
    return (
      <div className="" >
        
        <Perfil nombre={"SEBASTIÁN BEDOYA RESTREPO"} rol={"Ingeniero de sistemas"}/>
        <Contacto ciudad={"La Ceja, ANT"} telefono={"(+57) 3142474248"} email={"sebastianbedoya25@gmail.com"}/>
        <Idiomas idiomas={idiomasData} />
        <LenguajesProgramacion lenguajesProgramacion={lenguajesProgramacionData} />
        <Habilidades habilidades={habilidadesData} />

      </div>
    );
  };
  
  export default LeftPanel;