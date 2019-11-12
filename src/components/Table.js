import React, {useState} from 'react';
import SortButton from './SortButton';

const Table = (props) => {
  const [orderBy, setOrderBy] = useState({
    columnName: 'Order',
    isAsc: true
  });

  //sorting steps array based on state & its data type
  const sortSteps = (data, sortValue) => {

    return data.steps.sort((a, b) => {

      //for strings
      if (typeof a[sortValue] === 'string') {
        let aSortField = a[sortValue].toLowerCase();
        let bSortField = b[sortValue].toLowerCase();

        if (aSortField > bSortField) {
          return orderBy.isAsc ? 1 : -1;
        }
        if (aSortField < bSortField) {
          return orderBy.isAsc ? -1 : 1;
        }
        return 0;

      //for numbers and possible booleans
      } else {
        
        if (orderBy.isAsc) {
          return Number(a[sortValue]) - Number(b[sortValue]);
        }
        return Number(b[sortValue]) - Number(a[sortValue]);
      }
    });

  };

  const data = () => {
    
    //setting order field
    let data =
      {...props.data, steps:
        props.data.steps.map((step, i) => {
          return { ...step, order: i };
        })
      };
    
    const sortValue = orderBy.columnName.toLowerCase();

    sortSteps(data, sortValue);

    return data;
  };

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
            <td>{data().user}</td>
            <td>{data().timestamp}</td>
            <td>{step.order}</td>
            <td>{step.name}</td>
            <td>{step.time}</td>
            <td>{step.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;