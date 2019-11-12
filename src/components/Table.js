import React from 'react';

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Timestamp</th>
          <th>Step Name</th>
          <th>Step Time</th>
          <th>Step Result</th>
        </tr>
      </thead>
      <tbody>
        {props.data.steps.map(step => (
          <tr>
            <td>{props.data.user}</td>
            <td>{props.data.timestamp}</td>
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