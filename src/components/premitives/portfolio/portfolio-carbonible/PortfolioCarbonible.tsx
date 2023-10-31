import React from "react";
import "./PortfolioCarbonible.css";
import {
  ai,
  buycarbo,
  figma,
  heroku,
  html5,
  nextjs,
  nibledash,
  postfresql,
  postman,
  reactjs,
  vector,
} from "../../../../assets";

const PortfolioCarbonible = () => {
  return (
    <div>
      <div className="title_port">Carbonible</div>
      <div className="port_item_wrap">
        <div className="port_wrap_text">
          <div className="tool_title">Abstract</div>
          <div>
            Carbonible emerges as a critical solution to confront the urgent and
            alarming issue of carbon emissions, one of the most pressing threats
            to our planet today. In a world without a platform like Carbonible,
            businesses would find themselves unable to fully leverage their
            low-carbon technologies and sustainable practices, resulting in a
            significant loss of potential carbon credits that could otherwise be
            employed to offset emissions in other sectors.
            <br /> The current situation is dire, with an overwhelming volume of
            carbon emissions generated daily, causing irreversible harm to our
            environment and endangering the survival of our species. Carbonible
            extends a lifeline to businesses striving to reduce their carbon
            footprint and make a positive environmental impact. <br />
            Without Carbonible, the financial barriers to adopting low-carbon
            technologies would remain insurmountable, leaving the potential
            benefits of these investments untapped. Carbonible stands as an
            indispensable tool for businesses committed to taking substantial
            action against climate change, contributing to a sustainable future
            for generations to come. The consequences of inaction loom too large
            to be ignored, and Carbonible offers a beacon of hope in an
            otherwise grim landscape.
          </div>
        </div>
        <div className="port_wrap_text">
          <div className="tool_title">Tool Stack</div>
          <div className="flex tool_img_wrap">
            <img src={figma} alt="fig" className="tool_img" />
            <img src={ai} alt="ai" className="tool_img" />
            <img src={heroku} alt="heroku" className="tool_img" />
            <img src={html5} alt="html" className="tool_img" />
            <img src={nextjs} alt="next" className="tool_img" />
            <img src={postfresql} alt="postfresql" className="tool_img" />
            <img src={postman} alt="postman" className="tool_img" />
            <img src={reactjs} alt="reactjs" className="tool_img w-[300px]" />
          </div>
        </div>
        <div className="w-full flex flex-wrap feat_one">
          <div className="w-full lg:w-1/2 flex flex-col  items-start">
            <div className="vector_wrap">
              <img src={vector} alt="" />
            </div>
            <div className="lg:text-[50px] text-[35px] text-gradient leading-[120%] font-black mb-[16px] text-left w-full hero_text">
              Generate, Trade & Retire Carbon Credit
            </div>
            <div className="w-full mb-[16px] lg:text-[24px] text-[20px]">
              Generate Carbon credits from your green practices that are
              accredited by Standardized bodies such as Verra and iCR. Sell
              carbon credits in a regulated marketplace where you define the
              price.
            </div>
            <div className="w-full flex justify-start items-center gap-x-6 text-center py-8">
              <button className="tecknology-btn-1 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl">
                Explore Product
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center ">
            <img src={nibledash} className="w-[85%] feat_img" />
          </div>
        </div>
        <div className="w-full flex flex-wrap feat_two">
          <div className="w-full lg:w-1/2 flex items-start feat_img_wrap">   
            <img src={buycarbo} className="w-[85%] feat_img"/>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col  items-start">
            <div className="vector_wrap">
              <img src={vector} alt="" />
            </div>
            <div className="lg:text-[50px] text-[35px] text-gradient leading-[120%] font-black mb-[16px] text-left w-full hero_text">
              Generate, Trade & Retire Carbon Credit{" "}
            </div>
            <div className="w-full mb-[16px] lg:text-[24px] text-[20px]">
              Generate Carbon credits from your green practices that are
              accredited by Standardized bodies such as Verra and iCR. Sell
              carbon credits in a regulated marketplace where you define the
              price.
            </div>
            <div className="w-full flex justify-start items-center gap-x-6 text-center py-8">
              <button className="tecknology-btn-1 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl">
                Explore Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarbonible;
