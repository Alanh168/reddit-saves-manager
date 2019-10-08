import React from 'react';
import logo from '../logo.png';

class Loader extends React.Component {
    componentDidMount () {
        setTimeout(function() {
            // $('.Loader').addClass('fadeaway');
        }, 3000);
    }
    render () {
        return(
            <div className="Loader">
                <div className="container">
                    <div className="planet"></div>
                    <div className="orbit">
                        <div className="moon"></div>
                    </div>
                </div>
                <h2>Loading</h2>
            </div>
        );
    }
}

export default Loader;