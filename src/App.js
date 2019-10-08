import React from 'react';
import './App.scss';
import Loader from "./components/Loader.js";
// import AppHeader from "./components/AppHeader.js";
// import SavesTable from "./components/SavesTable.js";

const App = () => {
  return (
    <div className="App">
        <Loader />
        {/*<AppHeader />*/}
        {/*<SavesTable />*/}
    </div>
  );
};

export default App;
