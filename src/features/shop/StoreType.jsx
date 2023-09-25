import { useEffect } from "react";

const StoreType = ({
  filterType,
  setFilterType,
  selectedCategory,
  products,
  setAllProductData,
}) => {
  useEffect(() => {
    handleStoreAmount();
  }, [filterType, selectedCategory]);

  function handleStoreAmount() {
    let filteredProducts = products;

    if (filterType === "available") {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount > 0
      );
    } else if (filterType === "pre") {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount < 1
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setAllProductData(filteredProducts);
  }

  return (
    <div className="mb-5 font-rexFontLight font-bold ">
      <h6 className="text-[1.1rem] ">საწყობის ტიპი</h6>
      <hr />
      <div>
        <label className="cursor-pointer flex justify-between">
          ყველა
          <input
            type="radio"
            name="filterType"
            value="all"
            checked={filterType === "all"}
            onChange={() => setFilterType("all")}
          />
        </label>
      </div>
      <div>
        <label className="cursor-pointer flex justify-between">
          მარაგშია
          <input
            type="radio"
            name="filterType"
            value="available"
            checked={filterType === "available"}
            onChange={() => setFilterType("available")}
          />
        </label>
      </div>
      <div>
        <label className="cursor-pointer flex justify-between">
          წინასწარი შეკვეთით
          <input
            type="radio"
            name="filterType"
            value="pre"
            checked={filterType === "pre"}
            onChange={() => setFilterType("pre")}
          />
        </label>
      </div>
    </div>
  );
};

export default StoreType;
