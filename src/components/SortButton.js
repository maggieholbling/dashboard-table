import React from 'react';

const Button = (props) => {

  const ascOrDesc = () => {
    if (props.selected && props.isAsc) {
      return <i className="fas fa-sort-down"></i>;
    } else if (props.selected && !props.isAsc) {
      return <i className="fas fa-sort-up"></i>;
    } else {
      return <i className="fas fa-sort-down unselected"></i>;
    }
  };
  

  return (
    <button
      className='sort'
      onClick={props.onClick}
    >
      {ascOrDesc()}
    </button>
  );
};

export default Button;