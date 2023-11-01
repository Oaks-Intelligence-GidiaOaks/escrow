import { useState } from "react";
import {
  Container,
  Footer,
  Hero,
  PortfolioCarbonible,
  PortfolioCarbAdjust,
} from "../../components";
import {
  left,
  port,
  right,
  port_light,
  left_light,
  right_light,
} from "../../assets";
import "./PortfolioBlock.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/images/groovyWalkAnimation.json";
import { useTheme } from "../../theme/useTheme";

const PortfolioBlock = () => {
  const { isDarkMode } = useTheme();
  const [index, setIndex] = useState(0);
  const tabs = ["Carbonible", "Carbon-Adjust", "Carbosense"];
  const Component = {
    0: <PortfolioCarbonible />,
    1: <PortfolioCarbAdjust />,
    2: (
      <div className="anim_wrap">
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          className="anim"
        />
      </div>
    ),
  }[index];

  const handleNext = () => {
    if (index < tabs.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(tabs.length - 1);
    }
  };
  return (
    <>
      <section className="port_block_wrap">
        <div className="">
          <Hero
            title="Portfolio"
            text="We provide personalized experiences and customised solutions."
            image={isDarkMode ? port : port_light}
          />
        </div>
        <Container>
          <div className="flex pt-[30px] max-w-[600px] overflow-y-scroll justify-between">
            {tabs.map((item, idx) => (
              <div
                className={`lg:mr-[29px] :mr-[15px] text-[#C4CAD6] text-[15px] lg:text-[24px] pb-[10px] cursor-pointer px-[10px] whitespace-nowrap tabs-font ${
                  index === idx && "borderb"
                } `}
                key={idx}
                onClick={() => {
                  setIndex(idx);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div>{Component}</div>
          <div className="flex justify-end arrow_wrap_con">
            <div
              className="arrow_wrap"
              onClick={() => {
                handlePrev();
                window.scrollTo(0, 0, window.innerHeight / 1.4);
              }}
            >
              <img src={isDarkMode ? left : left_light} alt="left arrow" />
            </div>
            <div
              className="arrow_wrap"
              onClick={() => {
                handleNext();
                window.scrollTo(0, window.innerHeight / 3);
              }}
            >
              <img src={isDarkMode ? right : right_light} alt="right arrow" />
            </div>
          </div>
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default PortfolioBlock;
