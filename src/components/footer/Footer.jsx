import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedln from "../../assets/images/linkedln.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container-fluid">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-lg-3">
              <img src={Logo} alt="Logo" className="img-fluid nav-brand pb-2" />
              <h5 className="footer-header">Escrow-Tech</h5>
              <a href="#" className="btn mt-4 footer-quote">
                Get a quote
              </a>
            </div>
            <div className="col-lg-3 ">
              <h5 className="footer-head">Company</h5>
              <Link to="#" className="footer-links nav-link">
                About Us
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Terms of Service
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Privacy Policy
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Careers
              </Link>
            </div>
            <div className="col-lg-3">
              <h5 className="footer-head">Company</h5>
              <Link to="#" className="footer-links nav-link">
                Home
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Services
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Contact
              </Link>
              <h5 className="footer-head pt-4">Partners</h5>
              <Link to="#" className="footer-links nav-link">
                See partners
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Become a partner
              </Link>
            </div>
            <div className="col-lg-3">
              <h5 className="footer-head">Specialization</h5>
              <Link to="#" className="footer-links nav-link">
                Artificial Intelligence
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Deep Learning
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Natural Language processing
              </Link>
              <Link to="#" className="footer-links nav-link pt-1">
                Image Recognition
              </Link>
            </div>
          </div>
          <div className="row justify-content-center align-items-center pt-3 pb-3">
            <div className="col-lg-6">
              <div className="d-flex gap-4">
                <Link to="#" className="footer-links nav-link pt-1">
                  <img src={Facebook} alt="facebook" />
                </Link>
                <Link to="#" className="footer-links nav-link pt-1">
                  <img src={Twitter} alt="twitter" />
                </Link>
                <Link to="#" className="footer-links nav-link pt-1">
                  <img src={Linkedln} alt="linkedln" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-lg-end text-center copyright pt-2">
              ©2023 Escrow-Tech Limited
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
