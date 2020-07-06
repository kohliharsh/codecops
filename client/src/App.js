import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import About from "../src/components/navcomponents/About";
import Contact from "../src/components/navcomponents/Contact";
import Footer from "../src/components/Footer";
import Blog from "../src/components/navcomponents/Blog";
import "./App.css";
import AOS from 'aos';

function App() {

 
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });

  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/blog' component={Blog} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
