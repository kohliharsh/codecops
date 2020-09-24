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
import Eventregister from "../src/components/navcomponents/Eventregister";
import Team from "../src/components/navcomponents/team";
import ExampleProjects from "../src/components/ExampleProjects";
import Results from "../src/containers/Results/Results";
import Certificates from "./containers/Certificates/Certificates";

//redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import AOS from "aos";

function App() {
  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration: 2000,
  });

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
                {/* <Route exact path='/register' component={Register} /> */}
                {/* <Route exact path='/login' component={Login} /> */}
                <Route exact path='/goc' component={Events} />
                <Route
                  exact
                  path='/eventregistration'
                  component={Eventregister}
                />
                <Route exact path='/team' component={Team} />
                <Route
                  exact
                  path='/goc/exampleprojects'
                  component={ExampleProjects}
                />
                <Route
                    exact
                    path='/goc/results'
                    component={Results}
                />
                <Route
                    exact
                    path='/goc/certificates/:id'
                    component={Certificates}
                />
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
