import "./styles.css";

import PropTypes from "prop-types";
import React from "react";

export default function Accordion({ title, isExpanded = false, children }) {
  return (
    <>
      <article className="accordion">
        <button className="accordion__title" aria-expanded={isExpanded}>
          {title}
        </button>
        <div className="accordion__content" hidden={!isExpanded}>
          {children}
        </div>
      </article>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  isExpanded: PropTypes.boolean,
  children: PropTypes.any,
};
