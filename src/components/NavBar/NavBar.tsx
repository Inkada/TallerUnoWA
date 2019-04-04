import React, { Component } from 'react';
import './NavBar.css';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
    if(!store.departments) return <p>Cargando...</p>;

    return <nav className="NavBar">
        <div>Hola</div>
        <DepartmentsMenu />
        <SearchBar/>
        <button></button>
    </nav>;
}


export default observer(NavBar);