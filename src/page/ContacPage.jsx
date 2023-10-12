import { Footer } from "../components";
import { cardIcon1, cardIcon2, cardIcon3 } from "../assets";
import Container from "../components/layout/container/Container";

const ContacPage = () => {
  return (
    <>
      <section className="contact-form-section">
        <Container>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pt-10 pb-10 gap-y-4 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6">
              <div className="form-box"></div>
            </div>
            <div className="py-2 col-span-12 md:col-span-4">
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
