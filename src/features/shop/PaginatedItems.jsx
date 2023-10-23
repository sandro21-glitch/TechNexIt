import React, { useEffect, useState } from "react";
import SingleShopItem from "./SingleShopItem";
import ReactPaginate from "react-paginate";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const PaginatedItems = ({
  selectedCategory,
  itemsPerPage,
  allProducts,
  isGrid,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const endOffset = (currentPage + 1) * itemsPerPage;
  const startOffset = currentPage * itemsPerPage;
  const currentProducts = allProducts.slice(startOffset, endOffset);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  useEffect(() => {
    // Reset currentPage to 0 when selectedCategory changes
    setCurrentPage(0);
  }, [selectedCategory]);

  return (
    <div>
      <ul
        className={`grid ${
          isGrid
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            : "grid-cols-1 gap-10"
        } `}
      >
        {currentProducts.map((product) => (
          <SingleShopItem key={product.id} product={product} isGrid={isGrid} />
        ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrFormNext className="text-2xl" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage} // Set the current page using forcePage
        previousLabel={<GrFormPrevious className="text-2xl" />}
        containerClassName="flex justify-start items-center font-rexFontLight"
        pageClassName="mx-2 w-7 h-7 border flex items-center justify-center"
        previousLinkClassName="mt-2 rounded hover:bg-gray-200"
        nextLinkClassName="mt-2 rounded hover:bg-gray-200"
        activeClassName="bg-veryLightBlue text-white "
      />
    </div>
  );
};

export default PaginatedItems;
