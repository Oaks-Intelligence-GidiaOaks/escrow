import { Footer } from "../components";
import { product_1, product_2, product_3, dashboard } from "../assets";
import Container from "../components/layout/container/Container";
import Carousel from "../components/layout/carousel/Carousel";

const LandingPage = () => {
  return (
    <>
      <section className="landing-page-sections">
        <Container>
          <p className="landing-page-products pb-5">Our Products</p>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center gap-y-3 gap-x-5 py-5 pb-">
            <div className="col-span-12 md:col-span-4 lg:col-span-4 landing-page-product-card">
              <div className="img-product">
                <img src={product_1} alt="" />
              </div>
              <div className="img-text pt-5">
                <p className="img-product-head">Carbon Credit Management</p>
                <p className="img-product-title">System: Carbonible</p>
                <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                  Empowering Organizations to attain sustainability goals and
                  fulfil their corporate responsibility. Initiate projects for
                  carbon credit generation, trade credits seamlessly, and retire
                  carbon credits efficiently.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-4 landing-page-product-card">
              <div className="img-product">
                <img src={product_2} alt="" />
              </div>
              <div className="img-text pt-5">
                <p className="img-product-head">Sustainable Home Retrofit</p>
                <p className="img-product-title">Platform: Carbon-Adjust</p>
                <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                  Bridging the gap between homeowners, financials institutions
                  and retrofitters to enable br homeowners access loans to go
                  green and make money from their green investment.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-4 landing-page-product-card">
              <div className="img-product">
                <img src={product_3} alt="" />
              </div>
              <div className="img-text pt-5">
                <p className="img-product-head">Categorize and Quantify GHG</p>
                <p className="img-product-title">Emissions: Carbosense</p>
                <p className="img-product-text pt-4 text-base md:text-sm sm:text-xs">
                  Get reports on your greenhouse gas emissions, allowing you to
                  gain valuable insights into your environmental impact. Track
                  your carbon offset contributions, empowering you to monitor
                  and contribute to your sustainability goals with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-12 flex justify-center items-center">
            <button className="portfolio-btn">Browse Portfolio</button>
          </div>
        </Container>

        <Container>
          <div className="flex justify-center items-center pb-5 pt-6">
            <h className="technology text-center xs:text-sm">
              Using Technology to Foster Sustainability
            </h>
          </div>
          <p className="technology-title justify-center text-base md:text-sm sm:text-xs">
            Discover our range of products addressing sustainability challenges,
            empowering Businesses and Individuals to achieve Net Zero. <br />{" "}
            Measure emissions, earn Carbon credits from green investments,
            access green loans, and offset past emissions – all through our{" "}
            <br /> collection of comprehensive digital solutions for enhanced
            sustainability.
          </p>
          <div className="flex justify-center items-center gap-x-6 text-center py-8">
            <button className="tecknology-btn-1 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl">
              Learn More
            </button>
            <button className="tecknology-btn-2 px-2 py-1 text-sm lg:px-8 lg:py-4 lg:text-xl">
              Explore Products
            </button>
          </div>
          <div className="dashboard flex justify-center items-center">
            <img src={dashboard} alt="" className="w-full sm:w-1/2 py-8" />
          </div>
        </Container>

        <Container>
          <p className="landing-page-products pb-10 pt-24">Our Services</p>
          <Carousel />
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
