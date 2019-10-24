import { GatorAvatar } from './synchronous';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const initialState = {
	name: 'maaz',
	age: 25
};

const store = mockStore(initialState);

describe('<GatorAvatar component testing/>', () => {
	test('it should not throw any error', () => {
		const wrapper = shallow(<GatorAvatar store={store} />);
	});
});
