import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

/**
 * Primary UI component for user interaction
 */
const Button = ({ secondary, size, disabled, label, ...props }) => {
  const variantClass = secondary ? "button--secondary" : "";
  const sizeClass = size !== "" ? `button--${size}` : "";
  return (
    <button
      type="button"
      className={["button", variantClass, sizeClass].join(" ")}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  secondary: false,
  size: "",
  disabled: false,
  onClick: undefined,
};
