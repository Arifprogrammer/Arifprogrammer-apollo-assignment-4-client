import switch1 from "../../../assets/images/switches/switches-1.jpg";
import switch2 from "../../../assets/images/switches/switches-2.jpg";
import switch3 from "../../../assets/images/switches/switches-3.jpg";
import switch4 from "../../../assets/images/switches/switches-4.jpg";
import React from "react";

const switches = [
  {
    image: switch1,
    title: "Geon Raptor MX Gaming Switches",
  },
  {
    image: switch2,
    title: "Geon Raptor MX Extreme Gaming Switches",
  },
  {
    image: switch3,
    title: "Sarokeys Strawberry Wine V2 Linear Switches",
  },
  {
    image: switch4,
    title: "Cherry MX2A Blue Switches",
  },
];

const Switches = () => {
  return (
    <>
      {switches.map((brand, i) => {
        return (
          <React.Fragment key={i}>
            <div className="px-12 py-6 shadow-lg rounded-md flex flex-col gap-4 bg-white items-center">
              <img
                src={brand.image}
                alt="Brand image"
                className="size-48 object-cover rounded-md"
              />
              <p className="text-center text-black font-medium">
                {brand.title}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Switches;
