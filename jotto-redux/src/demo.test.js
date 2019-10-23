test('renders no text when `success` prop is false', () => {
	
const props={ success: false };

const wrapper = shallow(<Congrats {...Props} />);

  wrapper.setProps({ foo: 'foo' });
  
  expect(wrapper.props().success).to.equal('false');
  
  
});
