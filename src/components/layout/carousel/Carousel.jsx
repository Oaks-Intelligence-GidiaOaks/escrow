import { useState } from "react";
import { services_card_1, services_card_2 } from "../../../assets";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: services_card_1,
      title: "Infrastructure",
      text: "We understand the challenges that come with managing large-scale infrastructure projects. That’s why our team of experts specializes in delivering bespoke solutions that help you maximize efficiency, minimize downtime, and stay ahead of the competition. Our solutions include everything from design and planning to implementation and ongoing maintenance, so you can rest assured that your infrastructure is in good hands.",
    },
    {
      image: services_card_2,
      title: "Financial Services",
      text: "The financial services industry is constantly evolving, and staying ahead of the curve is essential for success. Our solutions are designed to help you navigate this complex landscape, whether you're looking to optimize your operations, streamline your processes, or enhance your customer experience. We work with a wide range of financial institutions, from banks and credit unions to insurance companies and investment firms.",
    },
    {
      image: services_card_2,
      title: " Services",
      text: "The financial services industry is constantly evolving, and staying ahead of the curve is essential for success. Our solutions are designed to help you navigate this complex landscape, whether you're looking to optimize your operations, streamline your processes, or enhance your customer experience. We work with a wide range of financial institutions, from banks and credit unions to insurance companies and investment firms.",
    },
    {
      image: services_card_2,
      title: "Financial",
      text: "The financial services industry is constantly evolving, and staying ahead of the curve is essential for success. Our solutions are designed to help you navigate this complex landscape, whether you're looking to optimize your operations, streamline your processes, or enhance your customer experience. We work with a wide range of financial institutions, from banks and credit unions to insurance companies and investment firms.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full pb-12">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 z-10 tecknology-btn-2"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-10 tecknology-btn-2"
      >
        <FaArrowRight />
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full flex-none flex justify-center items-center"
            >
              <div className="landing-page-services-card">
                <div className="img-product">
                  <img src={card.image} alt={card.title} />
                </div>
                <p className="services-title pt-3">{card.title}</p>
                <div className="img-text pt-4">
                  <p className="img-services-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 pt-6">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-6 rounded-md ${
              activeIndex === idx ? "bg-active" : "bg-inactive"
            }`}
            style={{
              backgroundColor: activeIndex === idx ? "#AA00FA" : "#282D45",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
