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

        <div
          className={`container mx-auto space-y-4 pb-10 px-[4vw] max-w-[1440px] ${
            !isDarkMode && "text-black"
          }`}
        >
          <p className="">
            Escrow-Tech Limited. Registered Office: Castlemead, Lower castle
            Street, Bristol, BS1 3AG, United Kingdom. Registered Number
            12308672. Registered in England and Wales.
            <span className="px-2 underline text-[#0260A2]">
              <a target="__blank" href="https://www.escrow-tech.co.uk">
                www.escrow-tech.co.uk{" "}
              </a>
            </span>
            Authorised and regulated by the Financial Conduct Authority (FCA).
            Our Firm Reference Number is 1019810. You can check this on the
            Financial Services Register by visiting the FCA’s website
            <span className="px-2 underline text-[#0260A2]">
              <a target="__blank" href="https://www.fca.org.uk/register">
                www.fca.org.uk/register.
              </a>
            </span>
          </p>

          <p className="">
            Escrow-Tech Limited is a credit broker and not a lender. Credit is
            subject to status. Escrow-Tech Limited receives commission for
            introductions made relating to consumer credit. Escrow-Tech Limited
            does not provide financial advice. Please contact
            <span className="px-2 underline text-[#0260A2]">
              <a target="__blank" href="https://www.moneyhelper.org.uk">
                www.moneyhelper.org.uk
              </a>
            </span>
            or a financial advisor if you need financial advice.
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
