import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import main from './components/Main/main'
import Recipes from './components/recipes/index';
import diet from './components/diet/index';
import Footer from './Footer/Footer';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={main} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact  component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/recipes"  exact component={Recipes} />
          <Route path="/diet" exact component={diet} />
        </Switch>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
};

export default App;