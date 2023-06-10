import { useNavigate } from 'react-router-dom';
// import { BgHome, LogoWhite } from "../assets";

const Hero = () => {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" >
      <div className="w-full h-screen bg-black bg-opacity-60">
        <div className="flex flex-col h-full container mx-auto items-center font-poppins text-white">
          <div className="flex flex-col justify-center items-center mt-32 font-semibold lg:text-4xl text-2xl text-center leading-normal gap-6">
            {/* <img src={LogoWhite} className="w-1/4" /> */}
            HematYuk
            <div className="text-xl font-normal">
              Temukan rekomendasi restoran di sekitarmu<br/>
              dengan berbagai pilihan promo yang menarik!
            </div>
            <button className="btn-explore-voc bg-blue-light text-white text-base font-normal py-2 px-6 rounded-md transform duration-300 ease bg-green-primary hover:bg-white hover:text-black" 
              onClick={toPromo}>
                Telusuri Promo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
