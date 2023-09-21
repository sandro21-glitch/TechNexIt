import React from "react";
import SingleShopItem from "./SingleShopItem";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const PaginatedItems = ({ itemsPerPage, allProducts }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = allProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentProducts.map((product) => (
          <SingleShopItem key={product.id} product={product} />
        ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrFormNext className="text-2xl" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrFormPrevious className="text-2xl" />}
        containerClassName="flex justify-start items-center font-rexFontLight"
        pageClassName="mx-2 w-7 h-7 border flex items-center justify-center"
        previousLinkClassName="border p-2 rounded hover:bg-gray-200"
        nextLinkClassName="border p-2 rounded hover:bg-gray-200"
        activeClassName="bg-veryLightBlue text-white "
      />
    </div>
  );
};

export default PaginatedItems;
