import "./styles.scss";

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  return (
    <header>
      <a href="/" className="logo">
        GHD
      </a>
      <span>{title}</span>
      <div className="menu">
        <a href="/">Menu</a>
      </div>
    </header>
  );
}
