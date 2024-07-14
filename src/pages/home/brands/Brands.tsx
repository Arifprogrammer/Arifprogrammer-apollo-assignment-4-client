import razer from "../../../assets/images/logos/razer.svg";
import corsair from "../../../assets/images/logos/corsair.png";
import keycheron from "../../../assets/images/logos/keycheron.png";
import steelseries from "../../../assets/images/logos/steelseries.png";
import React from "react";

const brands = [
  {
    image: razer,
    title: "FOR GAMERS. BY GAMERS.",
  },
  {
    image: corsair,
    title: "PLAY TO YOUR LEVEL.",
  },
  {
    image: keycheron,
    title: "BRING HAPPINESS TO OUR CUSTOMERS.",
  },
  {
    image: steelseries,
    title: "WINNING IS EVERYTHING.",
  },
];

const Brands = () => {
  return (
    <>
      {brands.map((brand, i) => {
        return (
          <React.Fragment key={i}>
            <div className="px-12 py-6 shadow-lg rounded-md flex flex-col gap-6 bg-white items-center">
              <img
                src={brand.image}
                alt="Brand image"
                className="size-32 md:size-40 object-contain grow"
              />
              <p className="text-black italic">"{brand.title}"</p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Brands;
