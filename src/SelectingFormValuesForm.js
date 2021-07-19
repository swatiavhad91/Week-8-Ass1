import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import showResults from './showResults';

let SelectingFormValuesForm = props => {
  const {
    fruitname,
    quantity,
    price,
    handleSubmit,
    reset,
  
  } = props;
  return (
    
    <form onSubmit={handleSubmit}>
      <h2 style={{textAlign:'center'}}>* * * Fruit Basket * * *</h2>
      <div>
        
        <label>Fruit Name</label>
        <div>
          <Field
            name="fruitname"
            component="input"
            type="text"
            placeholder="Fruit Name"
            pattern="[A-Za-z]+" 
            title="FruitName must be character only.. It can not contain
            numbers or symbols.."
          />
        </div>
      </div>
      <div>
        <label>Quantity</label>
        <div>
          <Field
            name="quantity"
            id="q"
            component="input"
            type="text"
            placeholder="Quantity"
            pattern="[0-9]*" 
            title="Quantity should be decimal number only.. It can not be floationg 
            point number or symbol or character...."
          />
        </div>
      </div>
      <div>
        <label>Price</label>
        <div>
          <Field
            name="price"
            id="P"
            component="input"
            type="text"
            placeholder="Price"
            pattern="^[+-]?([0-9]*[.])?[0-9]+$" 
            title="Price can be decimal OR floating point
            number only.. It can not character or symbols.."
          />
        </div>
      </div>      
       <div>
        <button type="submit" onSubmit={showResults} >
          Submit 
        </button>
        <button type="button"onClick={reset}>
          Clear Values
        </button>
        
      </div>
      
        <p>{fruitname}</p>
    </form>
    
  );
};

SelectingFormValuesForm = reduxForm({
  form: 'selectingFormValues', 
})(SelectingFormValuesForm);

const selector = formValueSelector('selectingFormValues');  
SelectingFormValuesForm = connect(state => {
  const fruitnamevalue = selector (state, 'fruitname');
  const quantityvalue = selector(state, 'quantity');
  const pricevalue = selector (state, 'price');
  const totalvalue= selector(state, 'quanitity' * 'price')
  
  return {
    fruitnamevalue,
    quantityvalue,
    pricevalue,
    totalvalue
  };
  
})(SelectingFormValuesForm);


export default SelectingFormValuesForm;
