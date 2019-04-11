import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './SearchBar.css';


class SearchBar extends Component {
  render() {
    return (
        <div className="SearchBar">
        
        <input type="text" value="" placeholder="search" id="search"></input>
        
        </div>
    );
  }
}

export default SearchBar;


  