import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = wrapper.find(data-test = "component-congrats");
  expect(component.length).toBe(1);
});
  
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = wrapper.find(data-test = "component-congrats");
  expect(component.text()).toBe('');
});
  
test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = wrapper.find(data-test = "congrats-message");
  expect(message.text().length).not.toBe(0);
});
  
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
    const propError = checkPropTypes(
    Congrats.propTypes,
    expectedProps,
    'prop',
    Congrats.success);
  expect(propError).toBeUndefined();
});
