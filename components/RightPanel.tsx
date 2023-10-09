import Links from "./Links";

const RightPanel = () => {

  const linksData = [
    { enlace: 'https://www.linkedin.com/in/Sebastianbedoya25', icono: 'linkedin.png', textAltIcono: 'icono linkedin' },
    { enlace: 'https://wa.me/3142474248', icono: 'whatsapp.png', textAltIcono: 'icono whatsapp' },
    { enlace: 'https://www.facebook.com/Sebasbedoya05', icono: 'facebook.png', textAltIcono: 'icono facebook' },
    { enlace: 'https://www.instagram.com/sbdrpo', icono: 'instagram.png', textAltIcono: 'icono instagram' },
    { enlace: 'https://t.me/sbdrpo', icono: 'telegram.png', textAltIcono: 'icono telegram' },
  ];

  return (
    <div className="fixed grid justify-items-center">
      <h2 className="text-azul font-Epilogue text-xl font-bold text-center">Contacto</h2>
      <div>
        <Links links={linksData} />
      </div>
    </div>
  );
};

export default RightPanel;