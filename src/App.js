import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { withAuth0 } from "@auth0/auth0-react";




class App extends React.Component {
 





  
  render() {
    // console.log('app', this.props);
    let isAuthenticated = this.props.auth0.isAuthenticated;
    // console.log(isAuthenticated);

    return (
      <>


        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
            
           
              
              {
                isAuthenticated ? <BestBooks/>:<LoginButton/>
              }



            </Route>
            <Route exact path="/Profile">
              <Profile/>
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
