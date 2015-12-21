import TestUtils from 'react-addons-test-utils';
import React from 'react';
import { expect } from 'chai';
import 'babel-polyfill';

import Meter from '../index.js';

const shallowRenderer = TestUtils.createRenderer();
const data = {
	min: 0,
	max: 180,
	value: 45,
	unit: '£'
};

const element = <Meter min={ data.min } max={ data.max } value={ data.value }  unit={ data.unit } />;
shallowRenderer.render(element);
const component = shallowRenderer.getRenderOutput();

describe('A Meter component', () => {
	it('should render successfully', () => { 
        expect(component.type).to.equal('div');
        expect(component.props.children.length).to.equal(4);
	});
	it('should render an h2 element', () => {
        const h2 = component.props.children[0];
        expect(h2.type).to.equal('h2');
        expect(h2.props.children.length).to.equal(2);
        expect(h2.props.children[0]).to.equal(data.unit + ' ');
        expect(h2.props.children[1]).to.equal(data.value);
	});
	it('should render the arc element of the meter', () => {
        const arc = component.props.children[1];
        expect(arc.type).to.equal('div');
        expect(arc.props.style.borderRadius).to.equal('9999px 9999px 0 0');
        expect(arc.props.style.borderWidth).to.equal('20px 20px 0');
	});
	it('should render the needle of the meter', () => {
        const needle = component.props.children[1].props.children;
        expect(needle.type).to.equal('div');
        expect(needle.props.children.length).to.equal(2);
        expect(needle.props.children[0].props.style.borderRadius).to.equal('9999px 0 0 9999px');
        expect(needle.props.children[1].props.style.borderRadius).to.equal('100%');  
	});
	it('should rotate the needle the correct number of degrees', () => {
        const needle = component.props.children[1].props.children;
        expect(needle.props.style.transform).to.include(data.value);
	});
	it('should render an element with the min prop', () => {
        const min = component.props.children[2];
        expect(min.type).to.equal('span');
        expect(min.props.children[0]).to.equal(data.unit + ' ');
        expect(min.props.children[1]).to.equal(data.min);
	});
	it('should render an element with the max prop', () => {
        const min = component.props.children[3];
        expect(min.type).to.equal('span');
        expect(min.props.children[0]).to.equal(data.unit + ' ');
        expect(min.props.children[1]).to.equal(data.max);
	});
});