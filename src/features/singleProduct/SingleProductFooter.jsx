import { useState } from "react";
import SingleProductCharacteristics from "./SingleProductCharacteristics";
import UserReviews from "../../ui/UserReviews";
const SingleProductFooter = ({ singleItem }) => {
  const [tabName, setTabName] = useState("characteristics");

  const handleTabName = (name) => {
    setTabName(name);
  };

  return (
    <div className="py-20">
      <ul className="flex items-start gap-3 border-b border-greyBorder">
        <li onClick={() => handleTabName("characteristics")}>
          <p
            className={`${
              tabName === "characteristics"
                ? "border-l-greyBorder border-t-greyBorder border-r-greyBorder border-b-white"
                : "border-transparent"
            } cursor-pointer border-l border-t border-r border-b border-transparent
           hover:border-greyBorder hover:border-b-white -mb-[1px] p-2 font-rexFontLight font-bold`}
          >
            მახასიათებლები
          </p>
        </li>
        <li onClick={() => handleTabName("reviews")}>
          <p
            className={`${
              tabName === "reviews"
                ? "border-l-greyBorder border-t-greyBorder border-r-greyBorder border-b-white"
                : "border-transparent"
            } cursor-pointer border-l border-t border-r border-b border-transparent
         hover:border-greyBorder hover:border-b-white -mb-[1px] p-2 font-rexFontLight font-bold`}
          >
            გამოხმაურება
          </p>
        </li>
      </ul>
      {tabName === "characteristics" && (
        <SingleProductCharacteristics singleItem={singleItem} />
      )}
      {tabName === "reviews" && <UserReviews />}
    </div>
  );
};

export default SingleProductFooter;
