import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

export default function Accordion({ title, open = false, children }) {
  return (
    <>
      <details className="accordion" open={open}>
        <summary>{title}</summary>
        <div className="accordion__content">{children}</div>
      </details>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  open: PropTypes.boolean,
  children: PropTypes.any,
};
