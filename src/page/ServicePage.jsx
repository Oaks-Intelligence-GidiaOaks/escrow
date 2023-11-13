import { Footer, Hero } from "../components";
import {
  services_card_box_1,
  services_card_box_2,
  services_card_box_3,
  services_card_box_4,
  code,
  code_light,
  circle,
  rounded,
  services_step_1,
  services_step_2,
  services_step_3,
  services_step_4,
  research_card,
  software,
  advisory,
  consultancy,
  servicehero,
  servicehero_light,
  services_step_1_light,
  services_step_2_light,
  services_step_3_light,
  services_step_4_light,
  services_card_box_1_light,
  services_card_box_2_light,
  services_card_box_3_light,
  services_card_box_4_light,
} from "../assets";
import Container from "../components/layout/container/Container";
import { useTheme } from "../theme/useTheme";
import ScrollEffect from "../animation/ScrollEffect";

function ServicePage() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <Hero
        title="Our Services"
        text="Elevate your business to the next level with Escrow-Tech's forward-thinking technologies."
        image={isDarkMode ? servicehero : servicehero_light}
      />
      <section className="contact-form-section py-10">
        <Container>
          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-block ">
                  <div className="flex justify-between items-center ">
                    <img
                      src={services_step_1}
                      alt=""
                      className="md:me-4 hidden lg:block "
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                    />
                    <div className="text-box md:mr-4 md:max-w-xl">
                      <p
                        className="services-box-head"
                        // data-aos="fade-down"
                        // data-aos-duration="1000"
                      >
                        Software Development
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our software development services are designed to
                        empower businesses with <br /> innovative solutions to
                        optimize operations, increase efficiency, and streamline{" "}
                        <br />
                        processes.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our experienced teams of software developers possess
                        expertise in various <br />
                        programming languages and platforms, allowing us to
                        craft tailor-made software <br />
                        solutions that address the unique requirements of our
                        clients.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Be it developing web or mobile applications, building
                        intricate software systems, or <br /> integrating
                        third-party tools, our software development services are
                        engineered to <br /> help you achieve your business
                        objectives and gain a competitive advantage in your{" "}
                        <br />
                        industries.
                      </p>
                    </div>
                    <img
                      src={isDarkMode ? software : services_step_1_light}
                      className="ms-8 hidden lg:block"
                      // data-aos="fade-left"
                      // data-aos-duration="1000"
                    />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-block">
                  <div className="flex justify-between items-center">
                    <img
                      src={services_step_2}
                      alt=""
                      className="md:me-4 hidden lg:block"
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                    />
                    <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                      <p
                        className="services-box-head"
                        // data-aos="fade-down"
                        // data-aos-duration="1000"
                      >
                        Advisory{" "}
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our advisory services are dedicated to equipping
                        businesses with actionable insights <br /> and
                        recommendations to achieve their sustainability
                        objectives.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our team of experienced advisors collaborates closely
                        with clients to <br /> comprehensively understand their
                        specific challenges and goals, providing tailored <br />{" "}
                        guidance on issues such as carbon accounting, energy
                        efficiency, and sustainable <br /> supply chain
                        management.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our advisory services are engineered to enable
                        businesses to take a comprehensive <br /> approach to
                        sustainability, resulting in cost savings, improved
                        performance, and <br /> enhanced reputation.
                      </p>
                    </div>
                    <img
                      src={isDarkMode ? advisory : services_step_2_light}
                      className="ms-8 hidden lg:block"
                      // data-aos="fade-left"
                      // data-aos-duration="1000"
                    />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-block">
                  <div className="flex justify-between items-center">
                    <img
                      src={services_step_3}
                      alt=""
                      className="md:me-4 hidden lg:block"
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                    />
                    <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                      <p
                        className="services-box-head"
                        // data-aos="fade-down"
                        // data-aos-duration="1000"
                      >
                        Research{" "}
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our software development services are designed to
                        empower businesses with <br /> innovative solutions to
                        optimize operations, increase efficiency, and streamline{" "}
                        <br /> processes.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our experienced teams of software developers possess
                        expertise in various <br /> programming languages and
                        platforms, allowing us to craft tailor-made software{" "}
                        <br /> solutions that address the unique requirements of
                        our clients.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Be it developing web or mobile applications, building
                        intricate software systems, or <br /> integrating
                        third-party tools, our software development services are
                        engineered to <br /> help you achieve your <br />{" "}
                        business objectives and gain a competitive advantage in
                        your industries.
                      </p>
                    </div>
                    <img
                      src={isDarkMode ? research_card : services_step_3_light}
                      className="ms-8 hidden lg:block"
                      // data-aos="fade-left"
                      // data-aos-duration="1000"
                    />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-block">
                  <div className="flex justify-between items-center">
                    <img
                      src={services_step_4}
                      alt=""
                      className="md:me-4 hidden lg:block"
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                    />
                    <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                      <p
                        className="services-box-head"
                        // data-aos="fade-down"
                        // data-aos-duration="1000"
                      >
                        Consultancy{" "}
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our software development services are designed to
                        empower businesses with <br /> innovative solutions to
                        optimize operations, increase efficiency, and streamline{" "}
                        <br />
                        processes.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Our experienced teams of software developers possess
                        expertise in various <br /> programming languages and
                        platforms, allowing us to craft tailor-made software
                        <br /> solutions that address the unique requirements of
                        our clients.
                      </p>
                      <p
                        className="services-box-text pb-4"
                        // data-aos="flip-right"
                        // data-aos-duration="1000"
                      >
                        Be it developing web or mobile applications, building
                        intricate software systems, or <br /> integrating
                        third-party tools, our software development services are
                        engineered to help you achieve your <br /> business
                        objectives and gain a competitive advantage in your{" "}
                        <br />
                        industries.
                      </p>
                    </div>
                    <img
                      src={isDarkMode ? consultancy : services_step_4_light}
                      className="ms-8 hidden lg:block"
                      // data-aos="fade-left"
                      // data-aos-duration="1000"
                    />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>

          <ScrollEffect
            inViewProperties={{
              y: [30, 0],
              opacity: [0, 1],
            }}
            inViewDelay={0.2}
            inViewTransitionTime={0.8}
          >
            <p
              className="services-expertise pb-2 pt-5 mt-5"
              // data-aos="flip-down"
              // data-aos-duration="1000"
            >
              Our Expertise
            </p>
          </ScrollEffect>

          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-5 gap-y-3 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-box">
                  <img
                    src={
                      isDarkMode
                        ? services_card_box_1
                        : services_card_box_1_light
                    }
                    alt=""
                    className="services-card-image pb-3"
                  />
                  <p
                    className="services-title pb-2"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  >
                    Artificial Intelligence
                  </p>
                  <p
                    className="services-text pb-5"
                    // data-aos="flip-left"
                    // data-aos-duration="1000"
                  >
                    At Escrow-Tech, we leverage AI to provide unique and
                    individualized <br /> solutions to the most complex problems
                    faced by our clients.
                  </p>

                  <div
                    className="rounded-card mt-3 hidden md:flex"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  >
                    <img
                      src={isDarkMode ? code : code_light}
                      alt=""
                      className="me-3"
                    />
                    <p className="code-text">
                      Intelligent software capable of risk assessment
                    </p>
                  </div>
                </div>
              </ScrollEffect>
            </div>
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-box relative">
                  <img
                    src={
                      isDarkMode
                        ? services_card_box_2
                        : services_card_box_2_light
                    }
                    alt=""
                    className="services-card-image pb-3"
                  />
                  <p
                    className="services-title pb-2"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  >
                    Big data analytics
                  </p>
                  <p
                    className="services-text pb-5"
                    // data-aos="flip-right"
                    // data-aos-duration="1000"
                  >
                    Our big data analytics team extracts valuable insights from
                    large data <br /> sets, using machine learning and AI
                    algorithms to uncover patterns <br /> and trends. We create
                    tailored solutions for each client&apos;s unique <br />{" "}
                    needs, from data warehousing to predictive analytics.
                  </p>
                  <div className="absolute bottom-0 right-0 hidden md:flex lg:flex">
                    <img src={circle} alt="" />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-10 gap-y-3 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-box relative">
                  <img
                    src={
                      isDarkMode
                        ? services_card_box_3
                        : services_card_box_3_light
                    }
                    alt=""
                    className="services-card-image pb-3"
                  />
                  <p
                    className="services-title pb-2"
                    // data-aos="fade-down"
                    // data-aos-duration="1000"
                  >
                    Image Processing
                  </p>
                  <p
                    className="services-text pb-5"
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                  >
                    At Escrow-Tech, we use image recognition to develop
                    solutions that <br /> enable our clients to analyze and
                    interpret visual data in real-time, <br /> such as security
                    cameras and drone footage.
                  </p>
                  <div className="absolute bottom-0 right-0 hidden lg:block md:flex lg:flex">
                    <img src={circle} alt="" />
                  </div>
                </div>
              </ScrollEffect>
            </div>
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <ScrollEffect
                inViewProperties={{
                  y: [30, 0],
                  opacity: [0, 1],
                }}
                inViewDelay={0.2}
                inViewTransitionTime={0.8}
              >
                <div className="services-card-box relative">
                  <img
                    src={
                      isDarkMode
                        ? services_card_box_4
                        : services_card_box_4_light
                    }
                    alt=""
                    className="services-card-image pb-3"
                  />
                  <p
                    className="services-title pb-2"
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                  >
                    Artificial Intelligence
                  </p>
                  <p
                    className="services-text pb-5"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  >
                    At Escrow-Tech, we leverage AI to provide unique and
                    individualized <br /> solutions to the most complex problems
                    faced by our clients.
                  </p>
                  <div className="absolute bottom-0 right-0 hidden lg:block md:flex lg:flex">
                    <img src={rounded} alt="" />
                  </div>
                </div>
              </ScrollEffect>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ServicePage;
