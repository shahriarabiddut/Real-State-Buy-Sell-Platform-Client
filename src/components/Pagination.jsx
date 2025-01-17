import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Pagination = ({
  setItemsPerPage,
  setCurrentPage,
  currentPage,
  pages,
  itemsPerPage,
}) => {
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className="pagination py-2 flex justify-center items-center gap-2 my-8"
      aria-label="Pagination Controls"
    >
      {/* Previous Button */}
      <button
        onClick={handlePrevPage}
        className={`bg-blue-500 text-white border-blue-500 inline-flex p-2 rounded-md border items-center gap-2 ${
          currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 0}
        aria-label="Previous Page"
      >
        <CiCircleChevLeft /> Prev
      </button>

      {/* Page Buttons */}
      {pages.map((page) => (
        <button
          className={`${
            currentPage === page ? "bg-blue-500 text-white border-blue-500" : ""
          } p-2 rounded-md border hover:bg-blue-100`}
          onClick={() => setCurrentPage(page)}
          key={page}
          aria-label={`Page ${page + 1}`}
        >
          {page + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNextPage}
        className={`bg-blue-500 text-white border-blue-500 inline-flex p-2 rounded-md border items-center gap-2 ${
          currentPage === pages.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentPage === pages.length - 1}
        aria-label="Next Page"
      >
        Next <CiCircleChevRight />
      </button>

      {/* Items Per Page Dropdown */}
      <label htmlFor="itemsPerPage" className="sr-only">
        Items per page
      </label>
      <select
        className="px-4 py-2 rounded-md border"
        value={itemsPerPage}
        onChange={handleItemsPerPage}
        id="itemsPerPage"
        aria-label="Select Items Per Page"
      >
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="60">60</option>
      </select>
    </div>
  );
};

export default Pagination;
