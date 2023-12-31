import { useState } from "react";
import Header from "./components/Header/Header";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import About from "./components/About/About";
import AppFeatures from "./components/AppFeatures/AppFeatures";
import AppInterface from "./components/AppInterface/AppInterface";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div
        className="container"
        style={{ backgroundImage: `url('./src/assets/img/bg1.jpg')` }}
      >
        <Header />
        <DownloadApp />
        <About />
        <AppFeatures />
        <AppInterface />
      </div>
    </div>
  );
}

export default App;
