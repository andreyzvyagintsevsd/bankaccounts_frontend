import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsListContainer from './components/list/ItemsListContainer';
import WizardContainer from './components/wizard/WizardContainer';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <ItemsListContainer />
      </div>
    );
  }
}

export default App;
