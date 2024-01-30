import { useState } from "react";
import Header from "./components/Header/Header";
import Banner_slider from "./components/Banner_slider/Banner_slider";
import Products from "./components/Products/Products";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner_slider />
      <Products />
    </>
  );
}

export default App;
