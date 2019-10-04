import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader.js";
import SavesTable from "./components/SavesTable.js";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <SavesTable />
    </div>
  );
}

export default App;
