import React, { Fragment } from "react"
import Navbar from './components/Navbar/Navbar';
import ScreenRoute from './components/Navbar/ScreenRoute';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <ScreenRoute />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
