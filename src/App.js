import React from 'react';
import './App.scss';
import Table from './components/Table';
import data from './data/sample2.json';

const App = () => {
  return (
    <Table
      data = {data}
    />
  );
};

export default App;
