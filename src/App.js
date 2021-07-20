import { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from  './Components/Login/login';
import './App.css';
import Register from './Components/Register/register';

function App() {
  return (
    <Fragment>
      
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Register/>
      </Route>

    </Fragment>
  );
}

export default App;
