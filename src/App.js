import React from 'react';
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import { Route, BrowserRouter as Router, useLocation, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Collection from './components/Collections/Collection';
import Exhibition from './components/Exhibitions/Exhibition';
import Contact from './components/Contact';
import itemDetail from './components/itemDetail';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/collection" component={Collection} exact />
          <Route path="/exhibition" component={Exhibition} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/collection/:id" component={itemDetail} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router >
  )
}

const Error = () => {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
