import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const options = [
  { id: 1, value: "9", label: "ფასი (ზრდადობით)" },
  { id: 2, value: "12", label: "ფასი (კლებადობით)" },
];

const SortByPrice = ({ allProductData, setAllProductData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState("ფასი (ზრდადობით)");
  const handleSortLowest = () => {
    allProductData.sort((a, b) => a.price - b.price);
    setPrice("ფასი (ზრდადობით)");
    setAllProductData([...allProductData]);
  };

  const handleSortHighest = () => {
    allProductData.sort((a, b) => b.price - a.price);
    setPrice("ფასი (კლებადობით)");
    setAllProductData([...allProductData]);
  };
  return (
    <div
      className="relative font-rexFontLight"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="border p-2 border-greyBorder font-bold font-rexFontLight  cursor-pointer  rounded-md">
        <h6 className="text-[1.1rem]">{price}</h6>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} `}>
        <div
          className="flex flex-col items-start gap-2 text-[.9rem]
         border border-greyBorder p-2 rounded-md mt-1"
        >
          <button onClick={handleSortLowest}>ფასი (კლებადობით)</button>
          <button onClick={handleSortHighest}>ფასი (ზრდადობით)</button>
        </div>
      </div>
    </div>
  );
};

export default SortByPrice;
