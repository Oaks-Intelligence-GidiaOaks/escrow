import { Footer } from "../components";
import {
  task,
  research,
  next,
  task_big,
  research_big,
  next_big,
  logo_black_big,
  abouthero,
  abouthero_light,
  logo_black_big_light,
} from "../assets";
import { Hero } from "../components";
import Container from "../components/layout/container/Container";
import { useTheme } from "../theme/useTheme";
import ScrollEffect from "../animation/ScrollEffect";

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Hero
        title="About Us"
        text="We provide personalized experiences and customised solutions."
        image={isDarkMode ? abouthero : abouthero_light}
      />
      <section className="contact-form-section py-10">
        <Container>
          <div className="grid justify-items-center mb-5 pt-5">
            <div className="py-2 col-span-12 md:col-span-12 justify-items-stretch">
              <div className="about-card-1-block p-4 ">
                <p
                  className="about-card-head-1"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  Who we are
                </p>

                <ScrollEffect
                  inViewProperties={{
                    y: [30, 0],
                    opacity: [0, 1],
                  }}
                  inViewDelay={0.2}
                  inViewTransitionTime={0.8}
                >
                  <p
                    className="about-card-text pt-4"
                    // data-aos="flip-left"
                    // data-aos-duration="1000"
                  >
                    Escrow-Tech is an innovative company that is revolutionizing
                    the way businesses approach problem-solving. Our team of
                    experts specializes in delivering bespoke solutions to a
                    diverse range of industries including infrastructure,
                    financial services, energy, data centres, agriculture, and
                    supply chain. <br /> At Escrow-Tech, we leverage digital
                    tools such as artificial intelligence, deep learning,
                    natural language processing, and image recognition to
                    provide customized solutions to complex problems faced by
                    our clients. Our team comprises industry leaders with years
                    of experience in their respective fields, and we take a
                    personalized approach to problem-solving, tailored to each
                    client&apos;s specific needs. Whether you&apos;re in need of
                    infrastructure solutions, financial services, energy
                    solutions, data centre solutions, agricultural solutions, or
                    supply chain solutions, we&apos;re here to help you achieve
                    success.
                  </p>
                </ScrollEffect>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={isDarkMode ? logo_black_big : logo_black_big_light}
                    alt=""
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center mb-5">
            <div className="py-2 col-span-12 md:col-span-9 justify-items-stretch">
              <div className="about-card-block p-4 ">
                <div
                  className="flex"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  <img src={task} alt="task" />
                  <p className="about-card-head px-3">Our Plan</p>
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
                    className="about-card-text pt-4"
                    // data-aos="flip-left"
                    // data-aos-duration="1000"
                  >
                    The company&apos;s sustainability plan focuses on measuring,
                    reporting, and reducing carbon footprint across all emission
                    scopes. They adhere to ISO 14064 standards and have a
                    comprehensive carbon emission reduction plan. They have a
                    reporting guidance document and a carbon emission reporting
                    form to ensure accurate measurement and reporting of all
                    relevant emissions
                  </p>
                </ScrollEffect>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={task_big}
                    alt=""
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center mb-5">
            <div className="py-2 col-span-12 md:col-span-9 justify-items-stretch">
              <div className="about-card-block p-4 ">
                <div
                  className="flex"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  <img src={research} alt="task" />
                  <p className="about-card-head px-3">Research</p>
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
                    className="about-card-text pt-4"
                    // data-aos="flip-left"
                    // data-aos-duration="1000"
                  >
                    We understand that achieving net-zero emissions requires
                    more than just measurement and reporting. That&apos;s why we
                    are actively exploring innovative solutions to reduce our
                    emissions across all areas of our operations. From investing
                    in renewable energy sources to optimizing our supply chain,
                    we are committed to finding practical and effective ways to
                    reduce our carbon footprint.
                  </p>
                </ScrollEffect>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={research_big}
                    alt=""
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center pb-10">
            <div className="py-2 col-span-12 md:col-span-9 justify-items-stretch">
              <div className="about-card-block p-4">
                <div
                  className="flex"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  <img src={next} alt="task" />
                  <p className="about-card-head px-3">Next Steps</p>
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
                    className="about-card-text pt-4 pb-5"
                    // data-aos="flip-left"
                    // data-aos-duration="1000"
                  >
                    As we move forward on this journey towards sustainability,
                    we are committed to keeping our stakeholders informed about
                    our progress. We will be regularly reporting our carbon
                    footprint and any carbon credits earned or purchased for
                    offset purposes. We invite you to join us on this journey
                    and play your part in securing a better future for our
                    planet. Together, we can make a positive impact and ensure a
                    sustainable future for all.
                  </p>
                </ScrollEffect>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={next_big}
                    alt=""
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                  />
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

export default AboutPage;
