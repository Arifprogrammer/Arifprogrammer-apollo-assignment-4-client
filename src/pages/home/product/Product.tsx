import { FaStar } from "react-icons/fa";
import keyboard from "../../../assets/images/keyboard.webp";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl font-semibold">
        <figure className="h-[256px] w-full overflow-hidden">
          <img
            src={keyboard}
            alt="keyboard"
            className="h-full w-full object-cover object-center lg:hover:scale-125 lg:transition lg:duration-300"
          />
        </figure>
        <div className="card-body grow bg-rose-200 text-slate-700">
          <p>Ducky</p>
          <h2 className="card-title text-lg">
            Ducky One 3 Mini
            <div className="badge bg-rose-500 border-none text-black">NEW</div>
          </h2>
          <p className="text-gray-500">Remaining items: 10</p>
          <div className="flex gap-x-1 items-center w-8">
            <p>5</p>
            <FaStar />
          </div>
          <p className="font-bold">$119.99</p>
        </div>
        <div className="card-actions w-full">
          <Link to="/products/12345" className="w-full">
            <button className="btn bg-black w-full !rounded-none !rounded-b-2xl text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
