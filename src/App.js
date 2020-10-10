import React from 'react';
import './App.css';
import Table from './components/Table/Table'
import filterFunc from './util/filter';

function App() {
  const url = '/hiring.json'
  return (
    <div className="App">
      <header className="App-header">
        <Table filterFunc={filterFunc} url={url} />
      </header>
    </div>
  );
}

export default App;
