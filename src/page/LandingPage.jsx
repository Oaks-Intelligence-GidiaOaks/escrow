import {
  // product_1,
  // product_2,
  // product_3,
  // dashboard,
  browse_img_1,
  browse_img_2,
  browse_img_3,
  vision_img,
  mark,
  globe,
  // mission,
  mission_1,
  mission_2,
  mission_3,
  sky,
  product_1_light,
  product_2_light,
  product_3_light,
  dashboard_light,
  browse_img_1_light,
  browse_img_2_light,
  browse_img_3_light,
  hero_light,
} from "../assets";
import { Footer, Hero } from "../components";
// import { product_1, product_2, product_3, dashboard } from "../assets";
import Container from "../components/layout/container/Container";
import Carousel from "../components/layout/carousel/Carousel";
// import { hero } from "../assets";
import { useTheme } from "../theme/useTheme";
import ScrollEffect from "../animation/ScrollEffect";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section className="landing-page-sections">
        <Hero
          title="Simple Solutions to Sustainability"
          text="Experience innovation like never before with out cutting edge technologies."
          image={hero_light}
        />
        <Container>
          <ScrollEffect
            inViewProperties={{
              y: [30, 0],
              opacity: [0, 1],
            }}
            inViewDelay={0}
            inViewTransitionTime={0.8}
            className="landing-page-products pb-5 pt-10"
          >
            Our Products
          </ScrollEffect>

          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center gap-y-3 gap-x-5 py-5 pb- align-stretch">
            <ScrollEffect
              inViewProperties={{
                x: [30, 0],
                opacity: [0, 1],
              }}
              inViewDelay={0.2}
              inViewTransitionTime={0.8}
              className="col-span-12 md:col-span-4 lg:col-span-4"
            >
              <div className="landing-page-product-card">
                <div className="img-product">
                  <img src={product_1_light} alt="" />
                </div>
                <div className="img-text pt-5">
                  <p className="img-product-head text-base md:text-lg">
                    Carbon Credit Management
                  </p>
                  <p className="img-product-title text-base md:text-base">
                    System: Carbonible
                  </p>
                  <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                    Empowering Organizations to attain sustainability goals and
                    fulfil their corporate responsibility. Initiate projects for
                    carbon credit generation, trade credits seamlessly, and
                    retire carbon credits efficiently.
                  </p>
                </div>
              </div>
            </ScrollEffect>

            <ScrollEffect
              inViewProperties={{
                x: [30, 0],
                opacity: [0, 1],
              }}
              inViewDelay={0.6}
              inViewTransitionTime={0.8}
              className="col-span-12 md:col-span-4 lg:col-span-4"
            >
              <div className="landing-page-product-card">
                <div className="img-product">
                  <img src={product_2_light} alt="" />
                </div>
                <div className="img-text pt-5">
                  <p className="img-product-head text-base md:text-lg">
                    Sustainable Home Retrofit
                  </p>
                  <p className="img-product-title text-base md:text-base">
                    Platform: Carbon-Adjust
                  </p>
                  <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                    Bridging the gap between homeowners, financials institutions
                    and retrofitters to enable br homeowners access loans to go
                    green and make money from their green investment.
                  </p>
                </div>
              </div>
            </ScrollEffect>
            <ScrollEffect
              inViewProperties={{
                x: [30, 0],
                opacity: [0, 1],
              }}
              inViewDelay={1}
              inViewTransitionTime={0.8}
              className="col-span-12 md:col-span-4 lg:col-span-4"
            >
              <div className="landing-page-product-card">
                <div className="img-product">
                  <img src={product_3_light} alt="" />
                </div>
                <div className="img-text pt-5">
                  <p className="img-product-head text-base md:text-lg">
                    Categorize, Quantify GHG
                  </p>
                  <p className="img-product-title text-base md:text-base">
                    Emissions: Carbosense
                  </p>
                  <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                    Get reports on your greenhouse gas emissions, allowing you
                    to gain valuable insights into your environmental impact.
                    Track your carbon offset contributions, empowering you to
                    monitor and contribute to your sustainability goals with
                    ease.
                  </p>
                </div>
              </div>
            </ScrollEffect>
          </div>

          <div className="pt-5 pb-12 flex justify-center items-center">
            <Link to={"/portfolio"}>
              <button className="portfolio-btn text-sm lg:px-8 lg:py-4 lg:text-xl secondary">
                Browse Portfolio
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section
        className={
          isDarkMode
            ? "landing-page-sections pb-5 pt-5"
            : "technology-section pb-5 pt-5"
        }
      >
        <Container>
          <div className="flex justify-center items-center pb-5 pt-6">
            <ScrollEffect
              inViewProperties={{
                y: [30, 0],
                opacity: [0, 1],
              }}
              inViewDelay={0.2}
              inViewTransitionTime={0.8}
            >
              <h5 className="technology text-center">
                Using Technology to Foster Sustainability
              </h5>
            </ScrollEffect>
          </div>
          <ScrollEffect
            inViewProperties={{
              y: [30, 0],
              opacity: [0, 1],
            }}
            inViewDelay={0.6}
            inViewTransitionTime={0.8}
          >
            <p className="technology-title justify-center text-base md:text-sm sm:text-xs">
              Discover our range of products addressing sustainability
              challenges, empowering Businesses and Individuals to achieve Net
              Zero. <br /> Measure emissions, earn Carbon credits from green
              investments, access green loans, and offset past emissions – all
              through our <br /> collection of comprehensive digital solutions
              for enhanced sustainability.
            </p>
          </ScrollEffect>
          <ScrollEffect
            inViewProperties={{
              y: [30, 0],
              opacity: [0, 1],
            }}
            inViewDelay={1}
            inViewTransitionTime={0.8}
          >
            <div className="flex justify-center items-center gap-x-6 text-center py-8">
              <Link to={"/about"}>
                <button className="tecknology-btn-1 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl primary">
                  Learn More
                </button>
              </Link>
              <Link to={"/portfolio"}>
                <button className="tecknology-btn-2 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl secondary">
                  Explore Products
                </button>
              </Link>
            </div>
          </ScrollEffect>
          <ScrollEffect
            inViewProperties={{
              opacity: [0, 1],
            }}
            inViewDelay={1.4}
            inViewTransitionTime={0.8}
          >
            <div className="dashboard flex justify-center items-center">
              <img
                src={dashboard_light}
                alt=""
                className="w-full sm:w-1/2 py-8"
              />
            </div>
          </ScrollEffect>
        </Container>
      </section>

      <ScrollEffect
        inViewProperties={{
          opacity: [0, 1],
        }}
        inViewDelay={0.4}
        inViewTransitionTime={0.8}
      >
        <section
          className={
            isDarkMode ? "landing-page-sections pb-5" : "services-section pb-5"
          }
        >
          <Container>
            <p className="landing-page-products pb-10 pt-24">Our Services</p>
            <Carousel />
          </Container>
        </section>
      </ScrollEffect>

      <section
        className={
          isDarkMode ? "landing-page-sections pt-5" : "browse-section pt-5"
        }
      >
        <Container>
          <div className="flex justify-center items-center py-10">
            <div className="browse-section-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div className="browse-col-1">
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.2}
                    inViewTransitionTime={0.8}
                  >
                    <p className="browse-heading pb-5 text-base md:text-xl">
                      Using Technology to Foster Sustainability
                    </p>
                  </ScrollEffect>
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.4}
                    inViewTransitionTime={0.8}
                  >
                    <p className="browse-subtitle pb-8 text-base md:text-sm sm:text-xs">
                      Leveraging the power of technology to drive sustainable
                      change. Our commitment to a greener future is embodied in
                      our flagship products, each meticulously designed to
                      address pressing environmental challenges. Join us in
                      shaping a more sustainable world through the seamless
                      integration of technology and environmental stewardship.
                    </p>
                  </ScrollEffect>
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.6}
                    inViewTransitionTime={0.8}
                  >
                    <Link to={"/portfolio"}>
                      <button className="browse-col-1-btn text-sm lg:px-8 lg:py-4 lg:text-xl secondary">
                        Browse Products
                      </button>
                    </Link>
                  </ScrollEffect>
                </div>
                <div className="browse-col-2">
                  <ScrollEffect
                    inViewProperties={{
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.8}
                    inViewTransitionTime={0.8}
                  >
                    <img
                      src={isDarkMode ? browse_img_1 : browse_img_1_light}
                      alt=""
                    />
                  </ScrollEffect>
                </div>
                <ScrollEffect
                  inViewProperties={{
                    opacity: [0, 1],
                  }}
                  inViewDelay={1}
                  inViewTransitionTime={0.8}
                >
                  <div className="browse-col-3 h-[400px]">
                    <div className="browse-col-box-3">
                      <p className="browse-col-head pb-4">
                        Stable Products You Can Trust
                      </p>
                      <p className="browse-col-text pb-5">
                        Gonsectetur eque nec nunc facilisis tellus tincidunt.
                        Malesuada maecenas ac bibendum consectetur.
                      </p>
                      <div className="flex justify-center items-center">
                        <div className="browse-box">
                          <img
                            src={isDarkMode ? browse_img_2 : browse_img_2_light}
                            alt=""
                            className="broswe-img p-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollEffect>
                <ScrollEffect
                  inViewProperties={{
                    opacity: [0, 1],
                  }}
                  inViewDelay={1.2}
                  inViewTransitionTime={0.8}
                >
                  <div className="browse-col-4 h-[400px]">
                    <div className="browse-col-box-3">
                      <p className="browse-col-head pb-4">
                        Fulfill Your Corporate Responsibility
                      </p>
                      <p className="browse-col-text pb-5">
                        Honsectetur eque nec nunc facilisis tellus tincidunt.
                        Malesuada maecenas ac bibendum consectetur.
                      </p>
                      <div className="flex justify-center items-center">
                        <img
                          src={isDarkMode ? browse_img_3 : browse_img_3_light}
                          alt=""
                          className="pt-8"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollEffect>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="py-12">
            <div className="flex justify-center items-center py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <div className="vision-col-1">
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.2}
                    inViewTransitionTime={0.8}
                  >
                    <p className="vision-heading pb-8">
                      What Makes us Stand Out
                    </p>
                  </ScrollEffect>
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.4}
                    inViewTransitionTime={0.8}
                  >
                    <div className="flex pb-3 text-base md:text-sm sm:text-xs">
                      <img src={mark} className="me-2" alt="" />
                      <p className="vision-subtitle">Creativity</p>
                    </div>
                    <p className="vision-lead pb-8">
                      Our experienced team of experts brings divers skills and
                      knowledge to the table, allowing us to tackle complex
                      challenges across a wide range of industries.
                    </p>
                  </ScrollEffect>
                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.6}
                    inViewTransitionTime={0.8}
                  >
                    <div className="flex pb-3 text-base md:text-sm sm:text-xs">
                      <img src={mark} className="me-2" alt="" />
                      <p className="vision-subtitle">Security</p>
                    </div>
                    <p className="vision-lead pb-8">
                      We understand the importance of security and
                      confidentiality, and we have robust systems in place to
                      ensure that our clients’ data and information are
                      protected at all times.
                    </p>
                  </ScrollEffect>

                  <ScrollEffect
                    inViewProperties={{
                      y: [30, 0],
                      opacity: [0, 1],
                    }}
                    inViewDelay={0.8}
                    inViewTransitionTime={0.8}
                  >
                    <div className="flex pb-3 text-base md:text-sm sm:text-xs">
                      <img src={mark} className="me-2" alt="" />
                      <p className="vision-subtitle">Sustainability</p>
                    </div>
                    <p className="vision-lead">
                      Our Commitment to sustainability and social responsibility
                      sets us apart from other Tech Companies.We strive to use
                      technology ro make a positive impact on society and the
                      environment, and we hold ourselves to high ethical
                      standards in all that we do.
                    </p>
                  </ScrollEffect>
                </div>
                <ScrollEffect
                  inViewProperties={{
                    opacity: [0, 1],
                  }}
                  inViewDelay={1}
                  inViewTransitionTime={0.8}
                >
                  <div className="vision-col-2">
                    <div className="flex justify-center items-center">
                      <img src={vision_img} alt="" />
                    </div>
                  </div>
                </ScrollEffect>
              </div>
            </div>
          </div>

          <ScrollEffect
            inViewProperties={{
              y: [30, 0],
              opacity: [0, 1],
            }}
            inViewDelay={0.6}
            inViewTransitionTime={0.8}
          >
            <div className="global py-12">
              <p className="global-head pb-3">ABOUT OUR PRODUCTS</p>
              <p className="global-heading pb-3">
                Digital Solutions for Global <br /> Sustainability Challenges
              </p>
              <p className="global-subtitle text-base md:text-sm sm:text-xs">
                By harnessing cutting-edge technology and forward-thinking
                strategies, our digital offerings empower individuals and <br />
                organizations to actively engage with and contribute to the
                achievement of comprehensive sustainability goals.
              </p>
            </div>
          </ScrollEffect>
        </Container>
      </section>

      <section className="landing-page-sections globe-white flex justify-center items-center">
        <ScrollEffect
          inViewProperties={{
            opacity: [0, 1],
          }}
          properties={{
            y: [0, 150],
          }}
          inViewDelay={0.8}
          inViewTransitionTime={2}
        >
          <img src={globe} alt="" className="w-full globe" />
        </ScrollEffect>
      </section>

      <section className="landing-page-sections globe-white pb-10">
        <Container>
          <div className="flex justify-center items-center py-10">
            <div
              className="mission-section-card flex flex-col items-center" // Flex properties added here
              style={{
                backgroundImage: `url(${sky})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <p className="mission-head pb-10 pt-5 text-center">Our Mission</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 md:p-2 lg:p-3">
                <div className="mission-col-1">
                  <img src={mission_1} alt="" className="pb-5" />
                  <p className="mission-subtitle text-base md:text-sm sm:text-xs">
                    We believe that technology can be a force for good. We are
                    driven by our desire to use innovative digital tools like
                    AI, deep learning, NLP, and image recognition to touch lives
                    and reduce inequality in communities worldwide.
                  </p>
                </div>
                <div className="mission-col-2">
                  <img src={mission_2} alt="" className="pb-5" />
                  <p className="mission-subtitle text-base md:text-sm sm:text-xs">
                    Our mission is simple: Technology Touching Lives. We strive
                    to generate prosperity for people everywhere, and we know
                    that every little act of kindness can make a significant
                    impact on society. That&apos;s why we&apos;re committed to
                    building a better world through technology, one solution at
                    a time.
                  </p>
                </div>
                <div className="mission-col-3">
                  <img src={mission_3} alt="" className="pb-5" />
                  <p className="mission-subtitle text-base md:text-sm sm:text-xs">
                    Escrow-Tech envisions a world where technology serves as a
                    force for good, not just a tool. We invite you to join us in
                    this endeavor and be a part of something truly special.
                    Whether you&apos;re a client, a partner, or someone who
                    shares our vision, we welcome you to the Escrow-Tech family.
                    Together, let&apos;s make a difference and create a better
                    future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
