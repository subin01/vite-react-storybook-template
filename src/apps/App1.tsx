import "@/styles/index.css";
import Logo from "@/assets/logo.png";
import Header from "@/UI/Header";

export default function App1() {
  return (
    <>
      <Header title="App1" />
      <main>
        <h1 className="h1">App 1</h1>
        <img alt="React logo" width="400px" src={Logo} />
      </main>
    </>
  );
}
