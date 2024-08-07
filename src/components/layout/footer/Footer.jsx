import {
  logo,
  facebook,
  twitter,
  linkedln,
  facebook_light,
  linkedln_light,
  twitter_light,
} from "../../../assets";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useTheme } from "../../../theme/useTheme";
import { PRIVACY_POLICY, TOS } from "../../../routes/CONSTANT";

function Footer() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="footer pt-5">
        <Container>
          <div
            className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pt-10 pb-6 gap-y-4"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <img
                src={logo}
                alt="logo"
                className="pb-2 mx-auto block md:mx-0 md:inline"
              />
              <p className="footer-header pb-8 mb-5">Escrow-Tech</p>
              <Link to="/contact" className="footer-quote mb-5">
                Get a quote
              </Link>
            </div>
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Company</p>
              <Link to="/about" className="footer-links pb-1">
                About Us
              </Link>
              <br />
              <Link to={TOS} className="footer-links pb-1">
                Terms of Service
              </Link>
              <br />

              <p to={PRIVACY_POLICY} className="footer-links pb-1">
                Privacy Policy
              </p>
              {/* <br /> */}
              {/* <Link to="#" className="footer-links pb-1">
                Careers
              </Link> */}
            </div>
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Quick Links</p>
              <Link to="/" className="footer-links pb-1">
                Home
              </Link>
              <br />
              <Link to="/services" className="footer-links pb-1">
                Services
              </Link>
              <br />
              <Link to="/contact" className="footer-links pb-1">
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
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Specialization</p>
              <p className="footer-links">Artificial Intelligence</p>
              <p className="footer-links">Deep Learning</p>
              <p className="footer-links">Natural Language processing</p>
              <p className="footer-links">Image Recognition</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-5 pb-5">
            <div className="flex items-center">
              <img
                src={isDarkMode ? facebook : facebook_light}
                alt="facebook link"
                className="px-3 link"
              />
              <img
                src={isDarkMode ? twitter : twitter_light}
                alt="twitter link"
                className="py-3 px-3 link"
              />
              <img
                src={isDarkMode ? linkedln : linkedln_light}
                alt="linkedln link"
                className="px-3 link"
              />
            </div>
            <div className="copyright hidden sm:block whitespace-nowrap">
              {" "}
              Copyright © {currentYear} Escrow-Tech Limited. All Rights
              Reserved.
            </div>
          </div>
        </Container>
        <div className="copyright flex flex-col items-center justify-center sm:hidden">
          <span>Copyright © {currentYear} Escrow-Tech Limited.</span>
          <span>All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
}

export default Footer;
