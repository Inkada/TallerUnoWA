import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';


import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';
import Footer from '../Footer/Footer';

class App extends Component {

  constructor(props: {}) {
    super(props);

    store.getDepartments();
  }

  render() {



    return (
      <div className="App">
        <h1>{store.pageTitle}</h1>

        <NavBar />

        <Store />

        <Footer />

      </div>
    );
  }
}

export default observer(App);
