import React from "react";

const FilterByCategory = ({
  categories,
  setSelectedCategory,
  setAllProductData,
  products,
  selectedCategory,
}) => {
  const handleFilterData = (category) => {
    setSelectedCategory(category);
    const filteredData = products.filter((item) => {
      return item.category === category;
    });
    setAllProductData(filteredData);
  };
  return (
    <div className="flex flex-col gap-5 font-rexFontLight">
      <div>
        <h6 className="text-[1.1rem] font-bold">კომპიუტერის ნაწილები</h6>
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                onClick={() => handleFilterData(category)}
                key={index}
                className={`${
                  selectedCategory === category
                    ? "text-darkBlue font-bold"
                    : "text-black"
                } cursor-pointer`}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterByCategory;
