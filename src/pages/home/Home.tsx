import React from "react";
import keyboard from "../../assets/images/keyboard.webp";
import Services from "./services/Services";
import Product from "./product/Product";
import Brands from "./brands/Brands";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 bg-black">
        <img src={keyboard} alt="keyboard" className="size-full" />
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-24 my-container">
        <Services />
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-24 my-container">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <React.Fragment key={item}>
              <Product />
            </React.Fragment>
          );
        })}
      </section>

      {/* Brands */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 my-24 my-container">
        <Brands />
      </section>

      {/* Testimonials */}
      <section className="my-24 bg-gray-100 rounded-lg my-container">
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;
