const defaultProps = { success: false };

const setup = (props={}) => {
	
  const setupProps = { ...defaultProps, ...props };
  
  return shallow(<Congrats {...setupProps} />)
}


test('test with default props', () => {
  const wrapper = setup();
});
	
test('test when user provides props', () => {
  const wrapper = setup();
});
