import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TProduct } from "../../../types";

const Product = ({ product }: { product: TProduct }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl font-semibold">
        <figure className="h-[256px] w-full overflow-hidden">
          <img
            src={product.image}
            alt="keyboard"
            className="h-full w-full object-cover object-center lg:hover:scale-125 lg:transition lg:duration-300"
          />
        </figure>
        <div className="card-body grow bg-rose-200 text-slate-700">
          <p className="text-slate-600">{product.brand}</p>
          <h2 className="card-title text-xl">
            {product.title}
            <div className="badge bg-rose-500 border-none text-black">NEW</div>
          </h2>
          <p>
            {product.availableQuantity
              ? `Remaining items: ${product.availableQuantity}`
              : "Out of stock"}
          </p>
          <div className="flex gap-x-1 items-center w-8">
            <p>{product.rating}</p>
            <FaStar />
          </div>
          <p className="font-bold">${product.price}</p>
        </div>
        <div className="card-actions w-full">
          <Link to={`/products/${product._id}`} className="w-full">
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
