import React from "react";

// import components
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import NewItems from "../src/components/NewItems";
import FeaturesSecond from "../src/components/FeaturesSecond";
import Products from "../src/components/Products";
import Testimonial from "../src/components/Testimonial";
import Newsletter from "../src/components/Newsletter";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
