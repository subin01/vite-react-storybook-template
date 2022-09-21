import "./styles.scss";

interface Props {
  className?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ className, header, footer, children }: Props) {
  const headerContent = header ? <div className="card__header">{header}</div> : null;
  const footerContent = footer ? <div className="card__footer">{footer}</div> : null;
  return (
    <article className={`card ${className}`}>
      {headerContent}
      {children}
      {footerContent}
    </article>
  );
}
