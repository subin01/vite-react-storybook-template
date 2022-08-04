import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Accordion({ title, children }) {
  return (
    <>
      <article className="accordion">
        <button className="accordion__title" aria-expanded="false">
          {title}
        </button>
        <div className="accordion__content">{children}</div>
      </article>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
