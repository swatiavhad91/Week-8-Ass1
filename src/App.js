import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import showResults from './showResults';
import Table from './Table';


class App extends Component {
  
  render() {
    return (
    <Router>
        <div>

        <h3> Select Option :</h3>
        
          <ul >
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            
             <li><Link to={'/selectingformvaluesform'} className="nav-link">Add Fruits To Basket</Link></li>  

             <li><Link to={'/table'} className="nav-link">See Form data in Table</Link></li>  
          </ul>
    
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              
                <Route path='/selectingformvaluesform'>
                <SelectingFormValuesForm onSubmit={showResults} /> 
                </Route>

                <Route path='/table'>
                <Table /> 
                </Route>

            
          </Switch>
          
        </div>
      </Router>
    );
  }}
  export default App