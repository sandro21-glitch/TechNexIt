import React from "react";

const FilterByCategory = ({
  categories,
  setSelectedCategory,
  setAllProductData,
  products,
  selectedCategory,
  filterType,
}) => {
  const handleFilterData = (category) => {
    setSelectedCategory(category);

    let filteredData = [...products]; 

    if (filterType === "available") {
      filteredData = filteredData.filter((item) => item.amount > 0);
    } else if (filterType === "pre") {
      filteredData = filteredData.filter((item) => item.amount < 1);
    }

    if (category) {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    setAllProductData(filteredData);
  };

  return (
    <div className="flex flex-col gap-5 font-rexFontLight mb-5">
      <div>
        <h6 className="text-[1.1rem] font-bold">კომპიუტერის ნაწილები</h6>
        <hr />
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
