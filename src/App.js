import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import TicketsDataLoad from './components/TicketsDataLoad/TicketsDataLoad';
import SignUp from './components/SingUp/SingUp';
import SingIn from './components/SingIn/SingIn';
import NoFound from './components/NoFound/NoFound';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <TicketsDataLoad></TicketsDataLoad>
        </Route>
        <Route path="/login">
          <SignUp></SignUp>
        </Route>
        <Route path="/singIn">
          <SingIn></SingIn>
        </Route>
        <PrivateRoute path="/destination/:destination">
          <Destination></Destination>
          <Blog></Blog>
        </PrivateRoute>
        <Route path="/destination">
          <Destination></Destination>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <TicketsDataLoad></TicketsDataLoad>
        </Route>
        <Route path="*">
          <NoFound></NoFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
