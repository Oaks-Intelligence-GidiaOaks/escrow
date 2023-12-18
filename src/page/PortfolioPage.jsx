import { useEffect } from "react";
import { PortfolioBlock } from "../blocks";
import ReactGA from "react-ga";

const PortfolioPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <PortfolioBlock />
    </>
  );
};

export default PortfolioPage;
