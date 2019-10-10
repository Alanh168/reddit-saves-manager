import React, { setState } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.png';

class Preloader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({loading: false});
            // $('.Loader').addClass('fadeaway');
        }, 2000);
    }
    render () {
        return(
            this.state.loading && <div className="Loader">
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

export default Preloader;