import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import OrderPaginate from "./OrderPaginate";
import { GrNext, GrPrevious } from "react-icons/gr";
const PaginatedItems = ({ userOrders, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = userOrders.slice(startIndex, endIndex);

  const pageCount = Math.ceil(userOrders.length / itemsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <OrderPaginate userOrders={currentItems} />
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={<GrNext />}
        pageClassName={"item pagination-page "}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousClassName={"item previous"}
        previousLabel={<GrPrevious />}
      />
    </div>
  );
};

export default PaginatedItems;
