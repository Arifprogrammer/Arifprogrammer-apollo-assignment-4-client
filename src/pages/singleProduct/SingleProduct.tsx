import { useParams } from "react-router-dom";
import keyboard from "../../assets/images/keyboard.webp";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const product = "ase";

  return (
    <section className="min-h-screen  py-8 lg:py-20 px-4 md:px-8 lg:px-0 lg:w-1/2 lg:mx-auto">
      {product && (
        <>
          <div className="grid grid-cols-1 gap-y-10 font-semibold">
            <div>
              <img
                src={keyboard}
                alt=""
                className="rounded-2xl shadow-lg shadow-primary"
              />
            </div>
            <div className="divide-y-2 space-y-4 text-slate-600">
              <div>
                <p>Ducky</p>
                <h2 className="card-title text-lg">
                  Ducky One 3 Mini
                  <div className="badge bg-rose-300 border-none text-black">
                    NEW
                  </div>
                </h2>
              </div>
              <p className="pt-4">
                The Logitech G915 TKL is a wireless tenkeyless mechanical
                keyboard with low-profile GL Clicky switches for a satisfying
                tactile bump and clicky sound. It features LIGHTSYNC RGB
                lighting, long battery life, and a comfortable design.
              </p>
              <div>
                <p className="text-gray-500">Remaining items: 10</p>
                <div className="flex gap-x-1 items-center w-8">
                  <p>5</p>
                  <FaStar />
                </div>
                <p className="font-bold">$119.99</p>
                <button className="btn bg-black text-white mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProduct;
