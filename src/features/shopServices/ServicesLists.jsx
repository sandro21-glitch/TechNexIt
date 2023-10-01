import React, { useState } from "react";
import PcServices from "./pcServices";
import LaptopServices from "./LaptopServices";
import Software from "./Software";
const servicesList = [
  {
    id: 1,
    name: "PC სერვისები",
  },
  {
    id: 2,
    name: "ლეპტოპის სერვისები",
  },
  {
    id: 3,
    name: "პროგრამული უზრუნველყოფა",
  },
];
const ServicesLists = () => {
  const [showServces, setShowServices] = useState("PC სერვისები");
  return (
    <div className="border border-greyBorder p-5">
      <p className="mb-5">შეგიძლიათ ისარგებლოთ შემდეგი სერვისებით:</p>
      <ul className="flex items-start flex-col md:flex-row w-full gap-5 mb-5">
        {servicesList.map((service) => {
          return (
            <li
              onClick={() => setShowServices(service.name)}
              key={service.id}
              className={`${
                showServces === service.name
                  ? "bg-gray-500 text-white"
                  : "bg-transparent"
              } w-full md:w-auto font-rexFontLight border border-greyBorder p-1 cursor-pointer`}
            >
              {service.name}
            </li>
          );
        })}
      </ul>
      {/* list */}
      {showServces === "PC სერვისები" ? (
        <PcServices />
      ) : showServces === "ლეპტოპის სერვისები" ? (
        <LaptopServices />
      ) : showServces === "პროგრამული უზრუნველყოფა" ? (
        <Software />
      ) : null}
    </div>
  );
};

export default ServicesLists;
