//import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from  './Components/Login/login';
import './App.css';
import Register from './Components/Register/register';
import Page404 from './Components/Page404';
import Dashboard from './Components/Dashboard/dashboard';

function App() {

  //const localStorageLoggedInDetails = localStorage.getItem('isLoggeIn');
  //const [isLoggedIn, setIsLoggedIn] = useState(localStorageLoggedInDetails);
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  //setIsLoggedIn(isLoggedInStoreValue);

  console.log("Loggedin details");
  console.log(Boolean(isLoggedIn));
  //console.log(localStorageLoggedInDetails);
  
  return (
    <Switch>
      
      <Route path="/login">        
        {(!!isLoggedIn === true)  && <Redirect to="/dashboard" />}
        {(!!isLoggedIn === false) && <Login/>}        
      </Route>
      
      <Route path="/dashboard">
        {(!!isLoggedIn === true) && <Dashboard />}
        {(!!isLoggedIn === false) && <Redirect to ="/login" />}        
      </Route>

      <Route path="/" exact>        
        {(!!isLoggedIn === true) && <Dashboard />}
        {(!!isLoggedIn === false) && <Redirect to ="/login" />}        
      </Route>
      
      <Route path="/signup">
        <Register/>
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
