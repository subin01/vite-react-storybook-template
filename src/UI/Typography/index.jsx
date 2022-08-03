import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Primary UI component for user interaction
 */
const Typography = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <h1 className="h1">Heading 1</h1>
      <h2 className="h2">Heading 2</h2>
      <h3 className="h3">Heading 3</h3>
      <h4 className="h4">Heading 4</h4>
      <h5 className="h5">Heading 5</h5>
      <h6 className="h6">Heading 6</h6>
    </>
  );
};

export default Typography;

Typography.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Typography.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
