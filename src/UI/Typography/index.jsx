import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

/**
 * Primary UI component for user interaction
 */
const Typography = ({ label, ...props }) => {
  return (
    <>
      <h1 className="h1">{label}</h1>
      <h2 className="h2">{label}</h2>
      <h3 className="h3">{label}</h3>
      <h4 className="h4">{label}</h4>
      <h5 className="h5">{label}</h5>
      <h6 className="h6">{label}</h6>
    </>
  );
};

export default Typography;

Typography.propTypes = {
  label: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  label: "Heading",
};
