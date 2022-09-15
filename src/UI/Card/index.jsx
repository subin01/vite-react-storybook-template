import React from "react";
import "./styles.css";
// import $ from 'blingblingjs'

export function Card({ className, header, footer, children }) {
  const headerContent = header ? (
    <div className="card__header">{header}</div>
  ) : null;
  const footerContent = footer ? (
    <div className="card__footer">{footer}</div>
  ) : null;
  return (
    <article className={`card ${className}`}>
      {headerContent}
      {children}
      {footerContent}
    </article>
  );
}
