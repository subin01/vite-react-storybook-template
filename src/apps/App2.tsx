import "@/styles/index.css";

import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

export default function App2() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <h1 className="h2">App 2</h1>
      <img alt="React logo" width="400px" src={Logo} />
      <HelloWorld msg="Hello React + TypeScript + Vite" />
    </main>
  );
}
