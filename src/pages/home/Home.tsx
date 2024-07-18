import React, { useEffect } from "react";
import keyboard from "../../assets/images/keyboard.webp";
import Services from "./services/Services";
import Product from "./product/Product";
import Brands from "./brands/Brands";
import Testimonials from "./testimonials/Testimonials";
import Switches from "./switches/Switches";
import Articles from "./articles/Articles";
import { useGetProductsQuery } from "../../redux/features/products/productsApi";
import { getAllProducts } from "../../redux/features/products/productSlice";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoading, refetch } = useGetProductsQuery(6);
  const { products } = useAppSelector(getAllProducts);

  //* effects
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <main>
      {/* Hero */}
      <section className="pt-12 md:pt-24 bg-black">
        <img src={keyboard} alt="keyboard" className="size-full" />
      </section>

      {/* Services */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Services
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 my-container">
        <Services />
      </section>

      {/* Products */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Featured Products
      </h1>
      {isLoading && (
        <div className="text-center">
          <span className="loading loading-bars loading-md"></span>
        </div>
      )}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 my-container">
        {products &&
          products.map((product) => {
            return (
              <React.Fragment key={product._id}>
                <Product product={product} />
              </React.Fragment>
            );
          })}
        <Link to="/products" className="col-span-full w-fit mx-auto">
          <button className="btn bg-rose-500 text-white border-none px-20">
            See all
          </button>
        </Link>
      </section>

      {/* Brands */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Popular Brands
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24 my-container">
        <Brands />
      </section>

      {/* Testimonials */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Reviews
      </h1>
      <section className="mb-24 bg-gray-100 rounded-lg my-container">
        <Testimonials />
      </section>

      {/* Switches */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Customizable Switches
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24 my-container">
        <Switches />
      </section>

      {/* Articles */}
      <h1 className="text-center text-2xl md:text-4xl text-slate-600 mt-24 mb-6 font-bold">
        Articles
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 my-container">
        <Articles />
      </section>
    </main>
  );
};

export default Home;
