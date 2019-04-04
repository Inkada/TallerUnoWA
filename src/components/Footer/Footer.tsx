import React, { Component } from 'react';
import './Footer.css';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';



class Footer extends Component {

    render() {
        return <div className="FooterFondo">

            <div className="FooterFondo">
                <DepartmentsMenu />
            </div>
        </div>
    }
}

export default Footer;