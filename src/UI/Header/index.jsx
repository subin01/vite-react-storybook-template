import "./styles.css";

export default function Header({ title }) {
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
