import { logo, facebook, twitter, linkedln } from "../../../assets";
import { Link } from "react-router-dom";
import Container from "../container/Container";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container>
          <div className="grid grid-flow-col auto-cols-max grid-cols-12 justify-center pt-10 pb-6 gap-1">
            <div className=" clearfix col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
              <img src={logo} alt="logo" className="pb-2" />
              <p className="footer-header pb-8 mb-5">Escrow-Tech</p>
              <a href="#" className="btn footer-quote mb-5">
                Get a quote
              </a>
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
              <p className="footer-head pb-2">Company</p>
              <Link to="#" className="footer-links pb-1">
                About Us
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Terms of Service
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Privacy Policy
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Careers
              </Link>
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3">
              <p className="footer-head pb-2">Quick Links</p>
              <Link to="#" className="footer-links pb-1">
                Home
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Services
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Contact
              </Link>
              <br />
              <br />
              <p className="footer-head pb-2">Partners</p>
              <Link to="#" className="footer-links pb-2">
                See partners
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Become a partner
              </Link>
            </div>
            <div className=" col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3">
              <p className="footer-head pb-2">Specialization</p>
              <Link to="#" className="footer-links pb-1">
                Artificial Intelligence
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Deep Learning
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Natural Language processing
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Image Recognition
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-12 justify-center pt-5 pb-5">
            <div className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex items-center">
              <img src={facebook} alt="" className="px-3" />
              <img src={twitter} alt="" className="py-3 px-3" />
              <img src={linkedln} alt="" className="px-3" />
            </div>
            <div className=" col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex items-center justify-end copyright">
              ©2023 Escrow-Tech Limited
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
