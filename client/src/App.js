import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import About from "../src/components/navcomponents/About";
import Contact from "../src/components/navcomponents/Contact";
import Footer from "../src/components/Footer";
import Blog from "../src/components/navcomponents/Blog";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Events from "../src/components/navcomponents/Events";
//redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <section>
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/events' component={Events} />
              </Switch>
            </section>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
