import React, { Component } from 'react';
import './Footer.css';
import NavBar from '../NavBar/NavBar';
import store from '../../stores/stores';


class Footer extends Component{

      render(){
        return <div className="Footer">

            <NavBar />

        </div>
    }
}

export default Footer;