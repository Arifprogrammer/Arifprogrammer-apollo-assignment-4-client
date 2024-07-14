import { MdDeleteForever } from "react-icons/md";
import keyboard from "../../assets/images/keyboard.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItems = () => {
  const [quantity, setQuantity] = useState(5); // Initial quantity from props or default

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure minimum 0
  };

  const deleteItem = () => {};

  return (
    <section className="my-container my-24">
      <div className="border-[#95A0A7] border-[1px] md:w-1/2 mx-auto rounded-lg flex flex-col md:flex-row items-center gap-4 p-2 pr-6">
        <img
          src={keyboard}
          alt=""
          className="size-48 object-cover rounded-lg"
        />
        <div className="details flex-1 text-black text-xl text-center md:text-start  space-y-2">
          <h1>Keyboard</h1>
          <p>Price: $5</p>
          <div className="quantity-control flex items-center gap-2">
            <button
              className="rounded-full h-8 w-8 bg-gray-200 grid place-items-center text-black"
              onClick={handleDecrement}
              disabled={quantity === 0} // Disable minus button if quantity is 0
            >
              <FaMinus />
            </button>
            <p className="px-2">Quantity: {quantity}</p>
            <button
              className="rounded-full h-8 w-8 bg-gray-200 grid place-items-center text-black"
              onClick={handleIncrement}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <button
          className="rounded-full h-14 w-14 bg-rose-300 grid place-items-center text-black"
          onClick={() => deleteItem()}
        >
          <MdDeleteForever className="text-3xl" />
        </button>
      </div>
      <div className="pt-6 text-black text-xl md:w-1/2 mx-auto">
        <p>
          Selected Items: <span className="font-medium">10</span>
        </p>
        <p>
          Total Price:{" "}
          <span className="text-2xl text-rose-500 font-semibold">$1000</span>
        </p>
        <Link to="/checkout">
          <button className="btn bg-rose-500 text-white border-none mt-4">
            Checkout
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CartItems;
