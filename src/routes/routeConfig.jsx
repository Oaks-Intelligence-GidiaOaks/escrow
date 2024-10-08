import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  ContacPage,
  AboutPage,
  ServicePage,
  PortfolioPage,
  BlogPage,
  SingleBlogPage,
  TacPage,
} from "../page";
import {
  CONTACT,
  LANDING,
  ABOUT,
  SERVICES,
  PORTFOLIO,
  BLOG,
  BLOG_SINGLE,
  ADMIN,
  TOS,
} from "./CONSTANT";
import SanityStudio from "../page/StudioPage";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={LANDING} element={<LandingPage />} />
      <Route path={CONTACT} element={<ContacPage />} />
      <Route path={ABOUT} element={<AboutPage />} />
      <Route path={SERVICES} element={<ServicePage />} />
      <Route path={PORTFOLIO} element={<PortfolioPage />} />
      <Route path={BLOG} element={<BlogPage />} />
      <Route path={BLOG_SINGLE} element={<SingleBlogPage />} />
      <Route path={ADMIN} element={<SanityStudio />} />
      <Route path={TOS} element={<TacPage />} />
    </Routes>
  );
};

export default RouterConfig;
