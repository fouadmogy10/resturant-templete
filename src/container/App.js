import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar/NavBar';
import Home from '../components/home/Home';
import Footer from '../components/Footer/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Home/>
      <Footer/>
      </div>
    )
  }
};
