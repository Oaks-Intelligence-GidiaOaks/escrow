import { Footer, Hero } from "../components";
import {
  cardIcon1,
  cardIcon2,
  cardIcon3,
  contacthero,
  contacthero_light,
  cardIcon1_light,
  cardIcon2_light,
  cardIcon3_light,
} from "../assets";
import Container from "../components/layout/container/Container";
import { useTheme } from "../theme/useTheme";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase";

const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      try {
        await addDoc(collection(db, "contact"), formData);

        // Show success toast
        toast.success("Form submitted successfully!", {
          position: "top-right",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    } else {
      setValidationError("All fields are required.");
      toast.error("All fields are required", {
        position: "top-right",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Hero
        title="Contact"
        text="Our team is always delighted to collaborate with businesses seeking innovative solutions to any problem"
        image={isDarkMode ? contacthero : contacthero_light}
      />
      <section className="contact-form-section py-5">
        <Container>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pt-10 pb-10 gap-y-4 gap-x-5">
            <div className="py-2 col-span-12 md:col-span-6 lg:col-span-7">
              <div className="form-box">
                {/* {validationError && (
                  <div className="validation-error text-danger">
                    {validationError}
                  </div>
                )} */}

                <p className="card-form-head pb-1">Keep In Touch</p>
                <p className="card-form-title mb-5">
                  We are easily reachable through our contact form or email
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-inputs mb-5">
                    <label
                      htmlFor="name"
                      className="contact-form-label block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="contact-form-input block w-full"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="contact-form-inputs mb-5">
                    <label
                      htmlFor="email"
                      className="contact-form-label block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="contact-form-input block w-full"
                      placeholder="youremail@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="contact-form-inputs mb-5">
                    <label
                      htmlFor="subject"
                      className="contact-form-label block mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className="contact-form-input block w-full"
                      placeholder="E.g (Quote to build to a trading platform)"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="contact-form-inputs mb-5">
                    <label
                      htmlFor="message"
                      className="contact-form-label block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="contact-form-textarea block w-full"
                      placeholder="E.g (Quote to build to a trading platform)"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="contact-form-inputs mb-4">
                    <button
                      className="contact-form-submit-btn w-full"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="py-2 col-span-12 md:col-span-3 lg:col-span-4">
              <div className="card-contact mb-5">
                <img
                  src={isDarkMode ? cardIcon1 : cardIcon1_light}
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
                  src={isDarkMode ? cardIcon2 : cardIcon2_light}
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
                  src={isDarkMode ? cardIcon3 : cardIcon3_light}
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

export default ContactPage;
