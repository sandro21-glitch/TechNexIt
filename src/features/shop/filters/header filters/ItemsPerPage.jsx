import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const options = [
  { id: 1, value: "9", label: "აჩვენეთ 9" },
  { id: 2, value: "12", label: "აჩვენეთ 12" },
  { id: 4, value: "15", label: "აჩვენეთ 15" },
  { id: 5, value: "18", label: "აჩვენეთ 18" },
  { id: 6, value: "21", label: "აჩვენეთ 21" },
  { id: 7, value: "24", label: "აჩვენეთ 24" },
  { id: 8, value: "27", label: "აჩვენეთ 27" },
  { id: 9, value: "30", label: "აჩვენეთ 30" },
];

const CustomDropdown = ({ setItemsPerPage, itemsPerPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setItemsPerPage(value);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[99999] inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center gap-1 justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <span>აჩვენეთ {itemsPerPage}</span>
            <IoMdArrowDropdown
              className={`${isOpen ? "rotate-180" : "rotate-0"} text-xl`}
            />
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="left-0 right-0  border border-greyBorder
         absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1 overflow-hidden ">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.value)}
                className="hover:scale-110 transition-transform ease-in duration-150 block w-full
                 text-center  md:text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
