import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({ secondary, label, ...props }) => {
  const mode = secondary ? 'button--secondary' : '';
  return (
    <button type="button" className={['button', mode].join(' ')} {...props}>
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  secondary: false,
  onClick: undefined,
};
