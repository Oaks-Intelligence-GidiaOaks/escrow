import { useEffect } from "react";
import { PortfolioBlock } from "../blocks";
import ReactGA from "react-ga4";

const PortfolioPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Portfolio Page",
    });
  }, []);

  return (
    <>
      <PortfolioBlock />
    </>
  );
};

export default PortfolioPage;
