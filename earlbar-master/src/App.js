import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import TheEarl from "./pages/TheEarl.js";
import TheTerrace from "./pages/TheTerrace.js";
import Gallery from "./pages/Gallery.js";
import ContactUs from "./pages/ContactUs.js";
import Error from "./pages/Error.js";

import Layout from "./components/layout/Layout.js";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/the-earl/" component={TheEarl} />
          <Route exact path="/the-terrace/" component={TheTerrace} />
          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/contact-us/" component={ContactUs} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
