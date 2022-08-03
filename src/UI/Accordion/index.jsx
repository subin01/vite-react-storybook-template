import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Accordion({ title, children }) {
  return (
    <>
      <article className="accordion">
        <button className="accordion__title" aria-expanded="false">
          {title}
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <rect height="8" width="2" y="1" x="4" />
            <rect height="2" width="8" y="4" x="1" />
          </svg>
        </button>
        <div className="accordion__content" hidden>
          {children}
        </div>
      </article>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
