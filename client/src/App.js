import React from 'react';
import MenuBar from './components/MenuBar'

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {Container} from 'semantic-ui-react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
      <Container>
       <Router>
       <MenuBar/>
   
       <Route exact path="/posts/:postId" component ={SinglePost}/>
     <Route exact path="/" component ={Home}/>
     <AuthRoute exact path="/login" component ={Login}/>
     <AuthRoute exact path="/register" component ={Register}/>
     
    
 
     </Router>
     </Container>
      </AuthProvider>
    );
}

export default App;
