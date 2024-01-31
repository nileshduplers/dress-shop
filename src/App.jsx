import React from "react";
import Header from "./components/Header/Header";
import Banner_slider from "./components/Banner_slider/Banner_slider";
import Products from "./components/Products/Products";
import WhyshopUs from "./components/WhyshopUs/WhyshopUs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Banner_slider />
      <Products />
      <WhyshopUs />
      <Footer />
    </>
  );
}

export default App;
