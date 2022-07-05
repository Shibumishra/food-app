import { Modal } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu';
import Header from './components/Header';
import Product from './components/Product';
import ThankYou from './components/ThankYou';

function App() {
   return (
      <Router>
         <div className="container">
            <Header />
            <Switch>
               <Route path="/" exact component={Menu} />
               <Route path="/menu" exact component={Product} />
               <Route path="/thankyou" exact component={ThankYou} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
