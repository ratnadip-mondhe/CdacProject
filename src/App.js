import React from 'react';

import Profile from './components/Profile.js';
import Request from './components/Request.js';
import Invoice from './components/Invoice.js';
import Registration from './components/Registration.js';
import CustomerRegister from './components/CustomerRegister.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = () => {
  return (
   <>
<Router>
<Navbar />
<Switch>

<Route path="/Profile"><Profile/></Route>
<Route path="/Request"><Request/></Route>
<Route path="/Registration"><Registration/></Route>
<Route path="/Invoice"><Invoice/></Route>
<Route path="/CustomerRegister"><CustomerRegister/></Route>
  </Switch>
</Router>


  

  </>
  
    );
  }
 
export default App;
