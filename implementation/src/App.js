import React, { Component } from 'react';

const styles = {
	container: {
		width: '25%',
		height: '25%',
		backgroundColor: '#2a2a2a'
	}
};

class Meter extends Component {
	render() {
		return (
            <div style={ styles.container }>
            </div>
		);
	}
}

Meter.propTypes = {
	min: React.PropTypes.number.isRequired,
	max: React.PropTypes.number.isRequired,
	value: React.PropTypes.number.isRequired,
	unit: React.PropTypes.string
};

export default Meter;