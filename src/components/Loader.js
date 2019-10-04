import React from 'react';
import logo from '../logo.png';

const Loader = () => {
    return(
        <header className="Loader">
            <img src={logo} className="Loader-logo" alt="logo" />
        </header>
    );
};

export default Loader;