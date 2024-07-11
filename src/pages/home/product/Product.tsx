import { FaStar } from "react-icons/fa";
import keyboard from "../../../assets/images/keyboard.webp";

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
        <div className="card-body grow">
          <p>Ducky</p>
          <h2 className="card-title text-lg">
            Ducky One 3 Mini
            <div className="badge badge-secondary">NEW</div>
          </h2>
          {/* <p className="text-gray-500 text-lg">Stay with {ownerName}!</p> */}
          <p className="text-gray-500">Remaining items: 10</p>
          <div className="flex gap-x-1 items-center w-8">
            <p>5</p>
            <FaStar />
          </div>
          <p className="font-bold">$119.99</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary w-full !rounded-none !rounded-b-2xl">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
