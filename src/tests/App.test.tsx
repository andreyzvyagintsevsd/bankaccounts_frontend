import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import ItemsListContainer from '../components/list/ItemsListContainer';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('shoud render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should contain list container component', () => {
    expect(wrapper.containsMatchingElement(<ItemsListContainer />)).toEqual(true);
  });

});
