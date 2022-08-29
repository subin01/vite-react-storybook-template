import "@/styles/index.css";

import Logo from "@/assets/logo.png";
import Header from "@/UI/Header";

export default function App2() {
  return (
    <>
      <Header title="App2" />
      <main>
        <h1 className="h2">App 2</h1>
        <img alt="React logo" width="400px" src={Logo} />
      </main>
    </>
  );
}
