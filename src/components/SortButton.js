import React from 'react';

const Button = (props) => {

  const ascOrDesc = () => {
    if (props.selected && props.isAsc) {
      return <i class="fas fa-sort-down"></i>;
    } else if (props.selected && !props.isAsc) {
      return <i class="fas fa-sort-up"></i>;
    } else {
      return <i class="fas fa-sort-down unselected"></i>;
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