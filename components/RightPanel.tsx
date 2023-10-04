const RightPanel = () => {
    return (
      <div className="fixed">
        {/* Contenido del panel derecho */}
        <div className="bg-fondo rounded-lg">
            <div className="bg-fondo rounded-lg ">
                <h2 className="text-azul font-Epilogue text-xl font-bold align-center">Links</h2>
            <div>
            <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
              Whatsapp
            </p>
            <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
              Facebook
            </p>
            <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
              Telegram
            </p>
            <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
              Instagram
            </p>
            <p className="bg-blanco text-fondo font-Poppins mt-4 py-2 px-4 rounded-lg text-left">
              Linkedin
            </p>
        </div>
      

        </div>
      )
      
    </div>
      </div>
    );
  };
  
  export default RightPanel;