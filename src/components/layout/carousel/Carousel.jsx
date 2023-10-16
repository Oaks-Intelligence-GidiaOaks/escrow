import { useState } from "react";
import { services_card_1, services_card_2 } from "../../../assets";

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
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        Next
      </button>

      <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center gap-y-3 gap-x-5 py-5 pb-">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`col-span-12 md:col-span-6 lg:col-span-6 landing-page-services-card transition-opacity duration-300 ${
              activeIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="img-product pb-3">
              <img src={card.image} alt={card.title} />
            </div>
            <p className="services-title">{card.title}</p>
            <div className="img-text pb-2">
              <p className="img-services-text pt-4 text-base md:text-sm sm:text-xs">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full ${
              activeIndex === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
