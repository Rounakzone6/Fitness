import Slider from "react-slick";
import { testimonial_bg, trainer } from "../assets";

const Trainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,    
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div
      className="relative min-h-[60vh] bg-cover bg-no-repeat text-white px-4 py-10"
      style={{ backgroundImage: `url(${testimonial_bg})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-60" />
      <div className="relative z-10 max-w-[60vw] mx-auto">
        <Slider {...settings}>
          {trainer.map((item, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full border border-red-500 mb-4"
                />
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-sm">{item.role}</p>
                <p className="text-center mt-2 text-sm">
                  {item.about}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trainer;
