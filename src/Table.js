import React, { Component } from 'react';
import { formValueSelector, reduxForm } from 'redux-form';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import showResults from './showResults';
import store from './store';
//import SelectingFormValuesForm from './SelectingFormValuesForm';

class Table extends React.Component {
  render() {
   
    
    return (
      <div id="Table" >
        <table style={{border:"solid 2px black", borderCollapse:"collapse" , width:"40%"}}>
          <tbody>
            <tr style={{border:"solid 2px black"}} >
              <th style={{border:"solid 2px black"}}>FruitName</th>
              <th style={{border:"solid 2px black"}}>  Price  </th> 
              <th style={{border:"solid 2px black"}}> Quantity </th>
              <th style={{border:"solid 2px black"}}> Total</th>
              
            </tr>           
              
                <tr style={{border:"solid 2px black"}}>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  
                </tr>
              
        
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;