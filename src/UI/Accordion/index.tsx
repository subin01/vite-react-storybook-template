import "./styles.scss";

interface Props {
  title: string;
  open?: boolean;
  children: React.ReactNode;
}

export default function Accordion({ title, open = false, children }: Props) {
  return (
    <>
      <details className="accordion" open={open}>
        <summary>{title}</summary>
        <div className="accordion__content">{children}</div>
      </details>
    </>
  );
}
