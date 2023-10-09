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
    <div className="fixed grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1" >
      <div><Perfil nombre={"SEBASTIÁN BEDOYA RESTREPO"} rol={"Ingeniero de sistemas"} /></div>
      <div><Contacto ciudad={"La Ceja, ANT"} telefono={"(+57) 3142474248"} email={"sebastianbedoya25@gmail.com"} /></div>
      <div><Idiomas idiomas={idiomasData} /></div>
      <div><LenguajesProgramacion lenguajesProgramacion={lenguajesProgramacionData} /></div>
      <div><Habilidades habilidades={habilidadesData} /></div>
    </div>

  );
};

export default LeftPanel;