import React, {useState} from 'react';
import SortButton from './SortButton';
import sortSteps from '../helpers/sortingData';

const Table = (props) => {
  const [orderBy, setOrderBy] = useState({
    columnName: 'Order',
    isAsc: true
  });

  
  //sorting data
  const data = () => {
    
    //setting order field
    let data =
      {...props.data, steps:
        props.data.steps.map((step, i) => {
          return { ...step, order: i + 1 };
        })
      };
    
    const sortValue = orderBy.columnName.toLowerCase();

    sortSteps(data, sortValue, orderBy.isAsc);

    return data;
  };

  //making sortable header fields
  const headerField = (name) => {
    return (
      <th>
        {name}
        <SortButton
          onClick = {() => {
            let isAsc = true;
            if (orderBy.columnName === name && orderBy.isAsc) {
              isAsc = false;
            }
            setOrderBy({
              columnName: name,
              isAsc: isAsc
            });
          }}
          isAsc = {orderBy.isAsc}
          selected = {orderBy.columnName === name ? true : false}
        />
      </th>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Timestamp</th>
          {headerField('Order')}
          {headerField('Name')}
          {headerField('Time')}
          {headerField('Result')}
        </tr>
      </thead>
      <tbody>
        {data().steps.map(step => (
          <tr>
            <td>{data().user ? data().user : "-"}</td>
            <td>{data().timestamp ? data().timestamp : "-"}</td>
            <td>{step.order}</td>
            <td>{step.name ? step.name : "-"}</td>
            <td>{step.time ? step.time : "-"}</td>
            <td>{step.result ? step.result : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;