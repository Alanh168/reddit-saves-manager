import React from 'react';
import './App.scss';
import Preloader from "./components/Preloader.js";
import SavesDisplay from "./components/SavesDisplay.js";

const App = () => {
  return (
    <div className="App">
        <Preloader />
        <SavesDisplay />
    </div>
  );
};

export default App;
