import React from 'react';
import ReactDOM from 'react-dom';
import Meter from './Meter/index.js';
import Api from './Utils/Api/index.js';
import CurrencyConverter from './Utils/CurrencyConverter/index.js';

const apiCall = new Api('https://widgister.herokuapp.com/challenge/frontend');


function render ({ min, max, value, format, unit }) {
	const converter = new CurrencyConverter({ format, unit });
	const convertedUnit = converter.convert();
	console.log(convertedUnit);
    ReactDOM.render(<Meter 
    	                min={ min } 
    	                max={ max } 
    	                value={ value } 
    	                unit={ convertedUnit } />, 
    	                document.getElementById('root'));
}

render({ min: 0, max: 0, value: 0 });

apiCall.then((data) => {
	render(data);
});