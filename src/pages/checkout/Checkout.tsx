import { useNavigate } from "react-router-dom";

const InputField = ({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required: boolean;
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && "*"}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
);

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/success");
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg my-24 text-black"
      onSubmit={handleSubmit}
    >
      <InputField label="Name" id="name" type="text" required />
      <InputField label="Phone Number" id="phone" type="tel" required />
      <InputField label="Address 1" id="address1" type="text" required />
      <InputField label="City" id="city" type="text" required />

      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Country *
        </label>
        <select
          id="country"
          className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Bangladesh">Bangladesh</option>
        </select>
      </div>

      <InputField label="Zip Code" id="zipCode" type="text" required />

      <div className="mb-4">
        <label
          htmlFor="payment"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Payment Methods*
        </label>
        <select
          id="payment"
          className="w-full px-3 py-2 bg-transparent font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Bkash">Cash on delivery</option>
          <option value="Stripe" disabled>
            Stripe
          </option>
        </select>
      </div>

      <button type="submit" className="w-full btn bg-black text-white">
        Place Order
      </button>
    </form>
  );
};

export default Checkout;
