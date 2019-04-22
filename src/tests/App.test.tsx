import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, ShallowWrapper } from 'enzyme';
import ItemsListContainer from '../components/list/ItemsListContainer';

describe('App', () => {
  let wrapper: any;
  beforeEach(() => wrapper = shallow(<App />));

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should contain list container component', () => {
    expect(wrapper.containsMatchingElement(<ItemsListContainer />)).toEqual(true);
  });

});
