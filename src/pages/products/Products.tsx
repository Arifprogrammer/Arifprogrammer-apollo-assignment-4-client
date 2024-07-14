import React, { useRef, useState } from "react";
import Product from "../home/product/Product";
import "../products/Products.css";

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Filter");
  const [rangeValue, setRangeValue] = useState<number>(100);
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(event.target.value));
  };

  const handleReset = () => {
    setSelectedFilter("Filter");
    setRangeValue(100);
    setSearch("");

    inputRef.current!.value = "";
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

        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleRangeChange}
            className="slider"
          />
          <div
            className="bubble"
            style={{
              left: `calc(${rangeValue}% + (${8 - rangeValue * 0.15}px))`,
            }}
          >
            {rangeValue}
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <React.Fragment key={item}>
              <Product />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Products;
