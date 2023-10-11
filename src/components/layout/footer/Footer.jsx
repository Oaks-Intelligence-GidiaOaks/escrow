import { logo } from "../../../assets";
import Container from "../container/Container";

function Footer() {
  return (
    <>
      <Container>
        <section className="footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid nav-brand pb-2"
                />
                <h5 className="footer-header">Escrow-Tech</h5>
                <a href="#" className="btn footer-quote">
                  Get a quote
                </a>
              </div>
              <div className="col-lg-3 ">
                <img src={logo} alt="Logo" className="img-fluid nav-brand" />
              </div>
              <div className="col-lg-3">
                <img src={logo} alt="Logo" className="img-fluid nav-brand" />
              </div>
              <div className="col-lg-3">
                <img src={logo} alt="Logo" className="img-fluid nav-brand" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Footer;
