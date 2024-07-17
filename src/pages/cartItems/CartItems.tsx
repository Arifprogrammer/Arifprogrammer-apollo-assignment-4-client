import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  decreaseQuantity,
  deleteFromCart,
  getCartProducts,
  getTotalOrderQuantity,
  getTotalPrice,
  setToCart,
} from "../../redux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { select } from "radash";

const CartItems = () => {
  //* state
  const [error, setError] = useState<boolean>(false);

  //* hooks
  const products = useAppSelector(getCartProducts);
  const totalOrderQuantity = useAppSelector(getTotalOrderQuantity);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispatch = useAppDispatch();

  //* effects
  useEffect(() => {
    const filterOutOfStockProducts = select(
      products,
      (f) => f,
      (f) => f.orderQuantity > f.availableQuantity
    );

    if (filterOutOfStockProducts.length) setError(true);
    else setError(false);
  }, [products]);

  return (
    <section className="my-container my-24 space-y-4">
      {products.length ? (
        products.map((product) => (
          <div
            key={product._id}
            className="border-[#95A0A7] border-[1px] md:w-1/2 mx-auto rounded-lg flex flex-col md:flex-row items-center gap-4 p-2 pr-6"
          >
            <img
              src={product.image}
              alt=""
              className="size-48 object-cover rounded-lg"
            />
            <div className="details flex-1 text-black text-xl text-center md:text-start  space-y-2">
              <h1>{product.name}</h1>
              <p>Price: ${product.price}</p>
              <div className="quantity-control flex items-center gap-2">
                <button
                  className="rounded-full h-8 w-8 bg-gray-200 grid place-items-center text-black"
                  onClick={() => dispatch(decreaseQuantity(product._id))}
                  disabled={product.orderQuantity === 0}
                >
                  <FaMinus />
                </button>
                <p className="px-2">Quantity: {product.orderQuantity}</p>
                <button
                  className="rounded-full h-8 w-8 bg-gray-200 grid place-items-center text-black"
                  onClick={() => dispatch(setToCart(product))}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button
              className="rounded-full h-14 w-14 bg-rose-300 grid place-items-center text-black"
              onClick={() => dispatch(deleteFromCart(product._id))}
            >
              <MdDeleteForever className="text-3xl" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-2xl text-center text-rose-500 font-semibold">
          You have no items on the cart
        </p>
      )}

      {products.length ? (
        <div className="pt-6 text-black text-xl md:w-1/2 mx-auto">
          <p>
            Total Quantity:{" "}
            <span className="font-medium">{totalOrderQuantity}</span>
          </p>
          <p>
            Total Price:{" "}
            <span className="text-2xl text-rose-500 font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <Link to="/checkout">
            <button
              className="btn bg-rose-500 text-white border-none mt-4"
              disabled={error}
            >
              Proceed to Checkout
            </button>
          </Link>
          {error && (
            <p className="text-rose-500 text-sm font-semibold">
              You've exceeded one or multiple products' quantity limit
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default CartItems;
