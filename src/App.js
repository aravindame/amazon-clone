import React, { useEffect } from 'react';
import { auth } from './config/Firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import { useStateValue } from './context/StateProvider';
import CheckOutPage from './pages/CheckOutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { actionTypes } from './context/Reducer';
import './styles/App.css';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        });
      }else{
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        });
      }
    })
    return ()=>{
      unsubscribe();
    }
  }, [user, dispatch])
  return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/checkout" component={CheckOutPage}/>
            <Route path="/login" component={LoginPage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
