import React from 'react';

const Pagination = (props) => {

  //creating array of page numbers
  const pageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i < props.lastPage + 1; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <container
      className="pagination"
    >
      {pageNumbers().map(num => (
        <button
          className={num === props.selectedPage ? "page-butn selected" : "page-butn"}
          onClick={() => {
            props.onChange(num);
          }}
        >
          {num}
        </button>
      ))}
    </container>
  );
};

export default Pagination;