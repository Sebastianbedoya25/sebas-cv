interface Links {
  enlace: string;
  icono: string;
  textAltIcono: string;
}

interface LinksData {
  links: Links[];
}

const LinksComponent: React.FC<LinksData> = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg block hover:bg-azul hover:text-white text-center flex items-center"
        >
          <img
            src={link.icono}
            alt={link.textAltIcono}
            className="w-8 h-8 mx-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default LinksComponent;