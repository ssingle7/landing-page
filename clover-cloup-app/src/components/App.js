import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './Pages/Home';
import Employee from './Pages/Employee';
import Admin from './Pages/Admin'
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router >
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/employee" component={Employee} />
      <Route path="/admin" component={Admin} />
      </Switch>
      </Router>
     
    </div>
    
    
   
  
    
  );
}

export default App;
