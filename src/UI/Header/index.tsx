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
      <span className="app-name">{title}</span>
      <div className="menu">
        <a href="/">Menu</a>
      </div>
    </header>
  );
}
