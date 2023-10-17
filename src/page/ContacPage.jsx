import { Footer, Hero } from "../components";
import { cardIcon1, cardIcon2, cardIcon3, contacthero } from "../assets";
import Container from "../components/layout/container/Container";

const ContacPage = () => {
  return (
    <>
      <Hero
        title="Contact"
        text="Our team is always delighted to collaborate with businesses seeking innovative solutions to any problem"
        image={contacthero}
      />
      <section className="contact-form-section py-5">
        <Container>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pt-10 pb-10 gap-y-4 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-7">
              <div className="form-box">
                <p className="card-form-head pb-1">Keep In Touch</p>
                <p className="card-form-title mb-5">
                  We are easily reachable through our contact form or email
                </p>
                <div className="contact-form-inputs mb-5">
                  <label
                    htmlFor="Name"
                    className="contact-form-label block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="contact-form-input block w-full"
                    placeholder="Your name"
                  />
                </div>
                <div className="contact-form-inputs mb-5">
                  <label
                    htmlFor="Name"
                    className="contact-form-label block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="contact-form-input block w-full"
                    placeholder="youremail@example.com"
                  />
                </div>
                <div className="contact-form-inputs mb-5">
                  <label
                    htmlFor="Subject"
                    className="contact-form-label block mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="contact-form-input block w-full"
                    placeholder="E.g (Quote to build to a trading platform)"
                  />
                </div>
                <div className="contact-form-inputs mb-5">
                  <label
                    htmlFor="Subject"
                    className="contact-form-label block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="contact-form-textarea block w-full"
                    placeholder="E.g (Quote to build to a trading platform)"
                  ></textarea>
                </div>

                <div className="contact-form-inputs mb-4">
                  <button className="contact-form-submit-btn w-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-3 lg:col-span-4">
              <div className="card-contact mb-5">
                <img
                  src={cardIcon1}
                  alt="cardIcon1"
                  className="contact-card-icon"
                />
                <p className="contact-card-icon-head pt-2">General inquires</p>
                <p className="contact-card-icon-title pt-2">
                  customercare@escrow-tech.co.uk
                </p>
              </div>
              <div className="card-contact mb-5">
                <img
                  src={cardIcon2}
                  alt="cardIcon1"
                  className="contact-card-icon"
                />
                <p className="contact-card-icon-head pt-2">
                  Consultancy/Advisory
                </p>
                <p className="contact-card-icon-title pt-2">
                  consultancy@escrow-tech.co.uk
                </p>
              </div>
              <div className="card-contact mb-5">
                <img
                  src={cardIcon3}
                  alt="cardIcon1"
                  className="contact-card-icon"
                />
                <p className="contact-card-icon-head pt-2">Sales/Product</p>
                <p className="contact-card-icon-title pt-2">
                  sales@escrow-tech.co.uk
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ContacPage;
