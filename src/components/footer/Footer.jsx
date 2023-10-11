import Logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <img src={Logo} alt="Logo" className="img-fluid nav-brand pb-2" />
              <h5 className="footer-header">Escrow-Tech</h5>
              <a href="#" className="btn footer-quote">
                Get a quote
              </a>
            </div>
            <div className="col-lg-3 ">
              <img src={Logo} alt="Logo" className="img-fluid nav-brand" />
            </div>
            <div className="col-lg-3">
              <img src={Logo} alt="Logo" className="img-fluid nav-brand" />
            </div>
            <div className="col-lg-3">
              <img src={Logo} alt="Logo" className="img-fluid nav-brand" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
