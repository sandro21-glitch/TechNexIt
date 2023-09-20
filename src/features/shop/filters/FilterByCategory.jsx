import React from "react";

const FilterByCategory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h6 className="font-rexFontLight font-semibold">
          კომპიუტერის ნაწილები
        </h6>
        <ul className="font-rexFontBold">
          <li className="cursor-pointer">პროცესორები</li>
          <li className="cursor-pointer">ვიდეო ბარათები</li>
          <li className="cursor-pointer">ოპერატიულები</li>
          <li className="cursor-pointer">SSD მეხსიერება</li>
          <li className="cursor-pointer">დედაპლატები</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByCategory;
