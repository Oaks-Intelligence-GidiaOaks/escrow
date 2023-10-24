import "./PortfolioCarbAdjust.css";

import {
  adone,
  adtwo,
  ai,
  figma,
  heroku,
  html5,
  nextjs,
  postfresql,
  postman,
  reactjs,
  vector,
} from "../../../../assets";

const PortfolioCarbAdjust = () => {
  return (
    <div>
      <div className="title_port">Carbon-Adjust</div>
      <div className="port_item_wrap">
        <div className="port_wrap_text">
          <div className="tool_title">Abstract</div>
          <div>
            Carbon-Adjust is the first global large-scale platform offering home
            residents the opportunity to commercialise the carbon credit
            benefits that exist in the energy efficiency investments they make
            in home improvements. Carbon-Adjust recognises that individuals
            cannot own carbon credits and so provides an end-to-end solution
            that includes aggregators, home improvement agencies, and financial
            institutions.
            <br /> Home owners or residents who have made investments in energy
            efficient projects or acquisitions can connect with private entities
            to help them acquire the carbon credits on these projects for an
            internal arrangement of settlement.
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
              Carbon Credits Acquisition for Home Owners
            </div>
            <div className="w-full mb-[16px] lg:text-[24px] text-[20px]">
              Whether you are a homeowner or occupant, Carbon-Adjust is here to
              assist you in registering for Carbon Credits and gaining access to
              financial support for your retrofitting endeavors.
            </div>
            <div className="w-full flex justify-start items-center gap-x-6 text-center py-8">
              <button className="tecknology-btn-1 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl">
                Explore Product
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center ">
            <img src={adone} className="w-[85%] feat_img" />
          </div>
        </div>
        <div className="w-full flex flex-wrap feat_two">
          <div className="w-full lg:w-1/2 flex items-start feat_img_wrap">
            <img src={adtwo} className="w-[85%] feat_img" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col  items-start">
            <div className="vector_wrap">
              <img src={vector} alt="" />
            </div>
            <div className="lg:text-[50px] text-[35px] text-gradient leading-[120%] font-black mb-[16px] text-left w-full hero_text">
              Sustainable Home Retrofit Platform: Carbon-Adjust
            </div>
            <div className="w-full mb-[16px] lg:text-[24px] text-[20px]">
              Bridging the gap between homeowners, financials institutions and
              retrofitters to enable homeowners access loans to go green and
              make money from their green investment.
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

export default PortfolioCarbAdjust;
