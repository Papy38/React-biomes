import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import './App.css';

function App() {
  const [biome, setBiome] = useState(0); // 0 being default (jungle)

  return (
    <>
      <Header />
      <h1>Test</h1>
      <Footer />
    </>
  );
}

export default App;
