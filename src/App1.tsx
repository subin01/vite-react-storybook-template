import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

export default function App() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <h1 className="h1">App 1</h1>
      <img alt="React logo" width="400px" src={Logo} />
      <HelloWorld msg="Hello React + TypeScript + Vite" />
    </main>
  );
}
