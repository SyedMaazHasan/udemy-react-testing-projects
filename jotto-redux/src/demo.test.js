//syntax: checkPropTypes(componentpropTypes ka set,prop which needs tobe checked,'prop', specific prop name which needs to be checked)

///HelloComponent.js///

import PropTypes from 'prop-types';

const HelloComponent = ({ name }) => <h1>Hi, {name}</h1>;

HelloComponent.propTypes = {
	name: PropTypes.string.isRequired
};

///HelloComponent.test.js/////

import checkPropTypes from 'check-prop-types';

test('does not throw warning with expected props', () => {
	
	let result = checkPropTypes(HelloComponent.propTypes, { name: 'Julia' }, 'prop', HelloComponent.name);
	
	expect(result).toBeUndefined();
});
