import { useState } from "react";
import SelectedCategoryBuilds from "./SelectedCategoryBuilds";

const categories = [
  { id: "amd", label: "AMD Ryzen სისტემები" },
  { id: "i3", label: "i3 სისტემები" },
  { id: "i5", label: "i5 სისტემები" },
  { id: "i7", label: "i7 სისტემები" },
  { id: "i9", label: "i9 სისტემები" },
];

const FullBuildItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("amd");

  return (
    <article>
      <ul className="flex items-center flex-wrap gap-5 font-rexFontLight text-[1rem] mb-10 ">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`${
              selectedCategory === category.id
                ? "text-lightBlue underline"
                : ""
            } cursor-pointer font-bold hover:text-lightBlue hover:underline transition-colors ease-in duration-100`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </li>
        ))}
      </ul>
      <SelectedCategoryBuilds selectedCategory={selectedCategory} />
    </article>
  );
};

export default FullBuildItems;
