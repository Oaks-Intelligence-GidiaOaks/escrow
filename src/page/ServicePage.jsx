import { Footer } from "../components";
import {
  task,
  research,
  next,
  task_big,
  research_big,
  next_big,
  logo_black_big,
} from "../assets";
import Container from "../components/layout/container/Container";

function ServicePage() {
  return (
    <>
      <section className="contact-form-section py-10">
        <Container>
          <div className="grid justify-items-center mb-5 pt-5">
            <div className="py-2 col-span-12 md:col-span-12 justify-items-stretch">
              <div className="about-card-1-block p-4 ">
                <p className="about-card-head-1">Who we are</p>
                <p className="about-card-text pt-4">
                  Escrow-Tech is an innovative company that is revolutionizing
                  the way businesses approach problem-solving. Our team of
                  experts specializes in delivering bespoke solutions to a
                  diverse range of industries including infrastructure,
                  financial services, energy, data centres, agriculture, and
                  supply chain. <br /> At Escrow-Tech, we leverage digital tools
                  such as artificial intelligence, deep learning, natural
                  language processing, and image recognition to provide
                  customized solutions to complex problems faced by our clients.
                  Our team comprises industry leaders with years of experience
                  in their respective fields, and we take a personalized
                  approach to problem-solving, tailored to each client&apos;s
                  specific needs. Whether you&apos;re in need of infrastructure
                  solutions, financial services, energy solutions, data centre
                  solutions, agricultural solutions, or supply chain solutions,
                  we&apos;re here to help you achieve success.
                </p>
                <div className="absolute bottom-0 right-0">
                  <img src={logo_black_big} alt="" />
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
