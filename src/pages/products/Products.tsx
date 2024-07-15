import React, { useRef, useState } from "react";
import Product from "../home/product/Product";
import "../products/Products.css";
import { useGetProductsQuery } from "../../redux/features/products/productsApi";
import { getAllProducts } from "../../redux/features/products/productSlice";
import { useAppSelector } from "../../redux/hook";

const Products = () => {
  //* constants
  const minRangeValue = 0;
  const maxRangeValue = 500;

  //* states
  const [minSliderValue, setMinSliderValue] = useState<number>(minRangeValue);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(maxRangeValue);
  const [selectedFilter, setSelectedFilter] = useState<string>("Filter");
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  //* hooks
  const { isLoading } = useGetProductsQuery(0);
  const { products } = useAppSelector(getAllProducts);
  let newProducts = products;

  // Handle min range change
  const handleMinRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinSliderValue(Number(event.target.value));
  };

  // Handle max range change
  const handleMaxRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxSliderValue(Number(event.target.value));
  };

  // Calculate max bubble position
  const calculateMinBubblePosition = () => {
    const percentage = (minSliderValue / maxRangeValue) * 100;
    return `calc(${percentage}% + (${8 - percentage * 0.15}px))`;
  };
  // Calculate max bubble position
  const calculateMaxBubblePosition = () => {
    const percentage = (maxSliderValue / maxRangeValue) * 100;
    return `calc(${percentage}% + (${8 - percentage * 0.15}px))`;
  };

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    setSearch(target.search.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const handleReset = () => {
    setSelectedFilter("Filter");
    setMinSliderValue(0);
    setMaxSliderValue(500);
    setSearch("");

    inputRef.current!.value = "";
    newProducts = products;
  };

  return (
    <>
      <div className="mt-16 mb-10 my-container flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-center ">
        <form onSubmit={handleSearch} className="grow">
          <div className="join">
            <input
              name="search"
              ref={inputRef}
              className="input input-bordered border-rose-500 rounded-l-3xl bg-transparent join-item w-full md:w-96 text-black"
              placeholder="search..."
            />
            <button
              type="submit"
              className="btn join-item rounded-r-full bg-rose-500 text-white border-none"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex gap-2 items-end text-black">
          <p className="pb-1">min</p>
          <div className="slider-container">
            <input
              type="range"
              min={minRangeValue}
              max={maxRangeValue}
              value={minSliderValue}
              onChange={handleMinRangeChange}
              className="slider"
            />
            <div
              className="bubble"
              style={{
                left: calculateMinBubblePosition(),
              }}
            >
              {minSliderValue}
            </div>
          </div>
          <p className="pb-1">max</p>
          <div className="slider-container">
            <input
              type="range"
              min={minRangeValue}
              max={maxRangeValue}
              value={maxSliderValue}
              onChange={handleMaxRangeChange}
              className="slider"
            />
            <div
              className="bubble"
              style={{
                left: calculateMaxBubblePosition(),
              }}
            >
              {maxSliderValue}
            </div>
          </div>
        </div>

        <select
          className="select border-rose-500 max-w-xs bg-transparent text-black w-32"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option disabled>Filter</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>

        <div>
          <button
            className="btn bg-black border-none text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 my-container">
        {isLoading && <span className="loading loading-bars loading-md"></span>}
        {newProducts &&
          newProducts.map((product) => {
            return (
              <React.Fragment key={product._id}>
                <Product product={product} />
              </React.Fragment>
            );
          })}
      </section>
    </>
  );
};

export default Products;
