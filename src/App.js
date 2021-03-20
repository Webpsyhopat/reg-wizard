import './App.css';
import { Route } from 'react-router';
import RegForm from './components/regForm/RegForm';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Route path = '/registration/:step?'><RegForm /></Route>
      <Route exact path = '/'>
      <NavLink to='/registration/1' className = 'regLink'><h1>Registration</h1></NavLink>
      </Route>
    </div>
  );
}

export default App;
