import React from 'react';
import  { shallow } from 'enzyme';
import App from './App';


test('clicking button increments counter display', () => {
    
  const counter = 7;
  const wrapper = shallow(<App />);
  wrapper.setState(state);

  // find button and click
  const button = wrapper.find(data-test="increment-button"]);
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1)

});
