import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="w-full">
      <div className="px-[4vw] max-w-[1440px] mx-auto">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
