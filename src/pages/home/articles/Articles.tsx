import React from "react";
import keyboard1 from "../../../assets/images/keyboards/keyboard-1.jpg";
import keyboard2 from "../../../assets/images/keyboards/keyboard-2.jpg";
import keyboard3 from "../../../assets/images/keyboards/keyboard-3.jpg";

const articles = [
  {
    image: keyboard1,
    title: "How To Clean a Mechanical Keyboard",
    writer: "Jhon Doe",
  },
  {
    image: keyboard2,
    title: "Are Mechanical Keyboards Better?",
    writer: "Jack Doe",
  },
  {
    image: keyboard3,
    title: "What Is a Mechanical Keyboard?",
    writer: "Max Doe",
  },
];

const Articles = () => {
  return (
    <>
      {articles.map((article, i) => {
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col shadow-md rounded-lg overflow-hidden">
              <div>
                <img
                  src={article.image}
                  alt=""
                  className="object-cover w-full h-48 mb-4"
                />
              </div>
              <div className="pl-2 pb-6">
                <h3 className="text-2xl text-rose-500 font-semibold">
                  {article.title}
                </h3>
                <p className="text-gray-500 font-medium">{article.writer}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Articles;
