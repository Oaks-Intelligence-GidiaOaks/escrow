import { Footer } from "../components";
import {
  services_card_box_1,
  services_card_box_2,
  services_card_box_3,
  services_card_box_4,
  code,
  circle,
  rounded,
} from "../assets";
import Container from "../components/layout/container/Container";

function ServicePage() {
  return (
    <>
      <section className="contact-form-section py-10">
        <Container>
          <div className="grid justify-items-center pb-10 mb-5 py-5">
            <div className="py-5 col-span-12 md:col-span-9 justify-items-stretch">
              <div className="services-card-block">vv</div>
            </div>
          </div>
          <p className="services-expertise pb-2 pt-5 mt-5">Our Expertise</p>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-10 gap-y-4 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-12 lg:col-span-6">
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

                <div className="rounded-card mt-3 invisible md:visible md:flex lg:flex">
                  <img src={code} alt="" className="me-3" />
                  <p className="code-text">
                    Intelligent software capable of risk assessment
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-12 lg:col-span-6">
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
                <div className="absolute bottom-0 right-0 invisible md:visible md:flex lg:flex">
                  <img src={circle} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pb-10 gap-y-4 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-12 lg:col-span-6">
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
                <div className="absolute bottom-0 right-0 invisible md:visible md:flex lg:flex">
                  <img src={circle} alt="" />
                </div>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-12 lg:col-span-6">
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
                <div className="absolute bottom-0 right-0 invisible md:visible md:flex lg:flex">
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
