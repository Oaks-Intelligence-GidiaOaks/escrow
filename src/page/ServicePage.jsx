import { Footer } from "../components";
import {
  services_card_box_1,
  services_card_box_2,
  services_card_box_3,
  services_card_box_4,
  code,
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
} from "../assets";
import Container from "../components/layout/container/Container";

function ServicePage() {
  return (
    <>
      <section className="contact-form-section py-10">
        <Container>
          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <div className="services-card-block">
                <div className="flex justify-between items-center">
                  <img
                    src={services_step_1}
                    alt=""
                    className="md:me-4 invisible lg:visible"
                  />
                  <div className="text-box md:mr-4 md:max-w-xl">
                    <p className="services-box-head">Software Development </p>
                    <p className="services-box-text pb-4">
                      Our software development services are designed to empower
                      businesses with <br /> innovative solutions to optimize
                      operations, increase efficiency, and streamline <br />
                      processes.
                    </p>
                    <p className="services-box-text pb-4">
                      Our experienced teams of software developers possess
                      expertise in various <br />
                      programming languages and platforms, allowing us to craft
                      tailor-made software <br />
                      solutions that address the unique requirements of our
                      clients.
                    </p>
                    <p className="services-box-text pb-4">
                      Be it developing web or mobile applications, building
                      intricate software systems, or <br /> integrating
                      third-party tools, our software development services are
                      engineered to <br /> help you achieve your business
                      objectives and gain a competitive advantage in your <br />
                      industries.
                    </p>
                  </div>
                  <img src={software} className="ms-8 invisible lg:visible" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <div className="services-card-block">
                <div className="flex justify-between items-center">
                  <img
                    src={services_step_2}
                    alt=""
                    className="md:me-4 invisible lg:visible"
                  />
                  <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                    <p className="services-box-head">Advisory </p>
                    <p className="services-box-text pb-4">
                      Our advisory services are dedicated to equipping
                      businesses with actionable insights <br /> and
                      recommendations to achieve their sustainability
                      objectives.
                    </p>
                    <p className="services-box-text pb-4">
                      Our team of experienced advisors collaborates closely with
                      clients to <br /> comprehensively understand their
                      specific challenges and goals, providing tailored <br />{" "}
                      guidance on issues such as carbon accounting, energy
                      efficiency, and sustainable <br /> supply chain
                      management.
                    </p>
                    <p className="services-box-text pb-4">
                      Our advisory services are engineered to enable businesses
                      to take a comprehensive <br /> approach to sustainability,
                      resulting in cost savings, improved performance, and{" "}
                      <br /> enhanced reputation.
                    </p>
                  </div>
                  <img src={advisory} className="ms-8 invisible lg:visible" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <div className="services-card-block">
                <div className="flex justify-between items-center">
                  <img
                    src={services_step_3}
                    alt=""
                    className="md:me-4 invisible lg:visible"
                  />
                  <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                    <p className="services-box-head">Research </p>
                    <p className="services-box-text pb-4">
                      Our software development services are designed to empower
                      businesses with <br /> innovative solutions to optimize
                      operations, increase efficiency, and streamline <br />{" "}
                      processes.
                    </p>
                    <p className="services-box-text pb-4">
                      Our experienced teams of software developers possess
                      expertise in various <br /> programming languages and
                      platforms, allowing us to craft tailor-made software{" "}
                      <br /> solutions that address the unique requirements of
                      our clients.
                    </p>
                    <p className="services-box-text pb-4">
                      Be it developing web or mobile applications, building
                      intricate software systems, or <br /> integrating
                      third-party tools, our software development services are
                      engineered to <br /> help you achieve your <br /> business
                      objectives and gain a competitive advantage in your
                      industries.
                    </p>
                  </div>
                  <img
                    src={research_card}
                    className="ms-8 invisible lg:visible"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center pb-10 mb-5 py-3">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-center">
              <div className="services-card-block">
                <div className="flex justify-between items-center">
                  <img
                    src={services_step_4}
                    alt=""
                    className="md:me-4 invisible lg:visible"
                  />
                  <div className="text-box flex-grow md:mr-4 md:max-w-xl">
                    <p className="services-box-head">Consultancy </p>
                    <p className="services-box-text pb-4">
                      Our software development services are designed to empower
                      businesses with <br /> innovative solutions to optimize
                      operations, increase efficiency, and streamline <br />
                      processes.
                    </p>
                    <p className="services-box-text pb-4">
                      Our experienced teams of software developers possess
                      expertise in various <br /> programming languages and
                      platforms, allowing us to craft tailor-made software
                      <br /> solutions that address the unique requirements of
                      our clients.
                    </p>
                    <p className="services-box-text pb-4">
                      Be it developing web or mobile applications, building
                      intricate software systems, or <br /> integrating
                      third-party tools, our software development services are
                      engineered to help you achieve your <br /> business
                      objectives and gain a competitive advantage in your <br />
                      industries.
                    </p>
                  </div>
                  <img
                    src={consultancy}
                    className="ms-8 invisible lg:visible"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="services-expertise pb-2 pt-5 mt-5">Our Expertise</p>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-5 gap-y-3 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <div className="services-card-box">
                <img
                  src={services_card_box_1}
                  alt=""
                  className="services-card-image pb-3"
                />
                <p className="services-title pb-2">Artificial Intelligence</p>
                <p className="services-text pb-5">
                  At Escrow-Tech, we leverage AI to provide unique and
                  individualized <br /> solutions to the most complex problems
                  faced by our clients.
                </p>

                <div className="rounded-card mt-3 invisible md:visible md:flex">
                  <img src={code} alt="" className="me-3" />
                  <p className="code-text">
                    Intelligent software capable of risk assessment
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <div className="services-card-box relative">
                <img
                  src={services_card_box_2}
                  alt=""
                  className="services-card-image pb-3"
                />
                <p className="services-title pb-2">Big data analytics</p>
                <p className="services-text pb-5">
                  Our big data analytics team extracts valuable insights from
                  large data <br /> sets, using machine learning and AI
                  algorithms to uncover patterns <br /> and trends. We create
                  tailored solutions for each client&apos;s unique <br /> needs,
                  from data warehousing to predictive analytics.
                </p>
                <div className="absolute bottom-0 right-0 invisible lg:visible md:flex lg:flex">
                  <img src={circle} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-10 gap-y-3 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <div className="services-card-box relative">
                <img
                  src={services_card_box_3}
                  alt=""
                  className="services-card-image pb-3"
                />
                <p className="services-title pb-2">Image Processing</p>
                <p className="services-text pb-5">
                  At Escrow-Tech, we use image recognition to develop solutions
                  that <br /> enable our clients to analyze and interpret visual
                  data in real-time, <br /> such as security cameras and drone
                  footage.
                </p>
                <div className="absolute bottom-0 right-0 invisible lg:visible md:flex lg:flex">
                  <img src={circle} alt="" />
                </div>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-6">
              <div className="services-card-box relative">
                <img
                  src={services_card_box_4}
                  alt=""
                  className="services-card-image pb-3"
                />
                <p className="services-title pb-2">Artificial Intelligence</p>
                <p className="services-text pb-5">
                  At Escrow-Tech, we leverage AI to provide unique and
                  individualized <br /> solutions to the most complex problems
                  faced by our clients.
                </p>
                <div className="absolute bottom-0 right-0 invisible lg:visible md:flex lg:flex">
                  <img src={rounded} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ServicePage;
