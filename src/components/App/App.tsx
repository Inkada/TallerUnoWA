import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';


import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';



class App extends Component {

  constructor(props: {}) {
    super(props);

    store.getDepartments();
  }

  render() {



    return (
      <div className="App">
        

        <NavBar />

        <Store />

        <Products/>

        <Footer />

      </div>
    );
  }
}

export default observer(App);
