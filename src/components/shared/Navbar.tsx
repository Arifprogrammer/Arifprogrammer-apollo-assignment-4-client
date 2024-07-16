import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getTotalOrderQuantity } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const totalOrderQuantity = useAppSelector(getTotalOrderQuantity);

  const listItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold lg:border-b-4 border-b-rose-500"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-rose-500 lg:text-white hover:text-rose-500 lg:transition lg:duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold lg:border-b-4 border-b-rose-500"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-rose-500 lg:text-white hover:text-rose-500 lg:transition lg:duration-200"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold lg:border-b-4 border-b-rose-500"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-rose-500 lg:text-white hover:text-rose-500 lg:transition lg:duration-200"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold lg:border-b-4 border-b-rose-500"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-rose-500 lg:text-white hover:text-rose-500 lg:transition lg:duration-200"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-semibold lg:border-b-4 border-b-rose-500"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-rose-500 lg:text-white hover:text-rose-500 lg:transition lg:duration-200"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <Link to="/cart-items">
          <div className="relative">
            <p className="absolute text-sm bg-white text-black h-4 w-4 font-medium flex items-center justify-center rounded-full -top-3 -right-3">
              {totalOrderQuantity}
            </p>
            <FaShoppingCart className="text-2xl text-rose-500" />
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <section className="fixed z-10 w-full bg-black">
      <div className="navbar p-0 my-container rounded-sm text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52 font-semibold text-black"
            >
              {listItem}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <Link to="/">
              <h1 className="text-2xl font-semibold">
                Key<span className="italic text-rose-500">stroke</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="lg:hidden">
            <Link to="/">
              <h1 className="text-xl font-semibold">
                Key<span className="italic text-rose-500">stroke</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal mr-3 gap-4 hidden lg:flex">
            {listItem}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
