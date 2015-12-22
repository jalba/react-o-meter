
class CurrencyConverter {
    constructor({ format, unit }) {
    	this.table = {
    		GBP: '£',
    		EUR: '€',
    		CHF: 'CHF',
    		USD: '$'
    	};
    	this.format = format;
    	this.unit = unit;
    }
    convert() {
    	if (this.format && this.format === 'currency') {
    		if(this.table[ this.unit ]) {
    			return this.table[ this.unit ];
    		} else {
                return '';
            }
    	} else {
    		return '';
    	}
    }
}

export default CurrencyConverter;