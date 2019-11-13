import React, {useState} from 'react';

const Pagination = (props) => {

  const [visiblePages, setvisiblePages] = useState([0,5]);

  //creating array of page numbers
  const pageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i < props.lastPage + 1; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  //let user set max entries per page
  const onChange = (event) => {
    //getting numeric values from input
    const numArr = event.target.value.match(/[0-9]/g);
    const num = numArr ? Number(numArr.join('')) : 0;

    if (num >= 1) {
      props.setMaxEntries(num);
    }
  };

  return (
    <container
      className="pagination"
    >
      <div>
        {/* only enable arrow if there are more pages to the left */}
        <i
          className={visiblePages[0] === 0 ? "fas fa-angle-left" : "fas fa-angle-left active"}
          onClick={() => {
            if (visiblePages[0] !== 0) {
              setvisiblePages([visiblePages[0] - 1, visiblePages[1] - 1]);
            }
          }}
        >
        </i>
        {/* actual page buttons */}
        {pageNumbers().slice(visiblePages[0], visiblePages[1]).map(num => (
          <button
            className={num === props.selectedPage ? "page-butn selected" : "page-butn"}
            onClick={() => {
              props.onChange(num);
            }}
          >
            {num}
          </button>
        ))}

        {/* only enable arrow if there are more pages to the right */}
        <i
          className={visiblePages[1] < pageNumbers().length ? "fas fa-angle-right active" : "fas fa-angle-right"}
          onClick={() => {
            if (visiblePages[1] < pageNumbers().length) {
              setvisiblePages([visiblePages[0] + 1, visiblePages[1] + 1]);
            }
          }}
        >
        </i>
      </div>

      <div className="pag-right">
        <label className="pag-label">Rows per page:</label>
        <input
          className="pag-input"
          name="maximum rows per page"
          type="text"
          placeholder={props.maxEntries}
          value={props.maxEntries}
          onChange={onChange}
        />
      </div>
    </container>
  );
};

export default Pagination;