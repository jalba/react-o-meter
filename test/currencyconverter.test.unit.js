import { expect } from 'chai';
import CurrencyConverter from '../implementation/src/Utils/CurrencyConverter/index.js';

describe('A CurrencyConverter', () => {
     it('should convert the unit to the appropiated symbol', () => {
         const converter = new CurrencyConverter({ format: 'currency', unit: 'GBP' });
         expect(converter.convert()).to.equal('£');
     });
     it('should return an empty string if the format does not match currency', () => {
         const converter = new CurrencyConverter({ format: 'other', unit: 'GBP' });
         expect(converter.convert()).to.equal('');
     });
     it('should return an empty string if the unit does not match one of the prefixed ones', () => {
         const converter = new CurrencyConverter({ format: 'currency', unit: 'dsfar' });
         expect(converter.convert()).to.equal('');
     });
}); 