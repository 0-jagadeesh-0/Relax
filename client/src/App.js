import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Music from './pages/MusicPage/components/Music/Music';
import LandingPage from './pages/LandingPage/LandingPage';
import Signup from './pages/Auth/Signup/Signup';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';
import Books from './pages/BooksPage/Books';
import Yoga from './pages/YogaPage/Yoga';
import MusicHome from './pages/MusicPage/components/MusicHome/MusicHome';
import Music from './pages/MusicPage/components/Music/Music';
import Playlist from './pages/Playlist/Playlist';
import Profile from './pages/Profile/Profile'


function App() {
  return (
    <Router>
      <Switch>



        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Login} />
        <Route path="/categories" component={Home} />
        <Route path="/music" component={MusicHome} />
        <Route path="/books" component={Books} />
        <Route path="/yoga" component={Yoga} />
        <Route path="/song/:id" component={Music} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/profile/:id" component={Profile} />
        {/* <Route path="/signp" component={Signup} /> */}

      </Switch>
    </Router>
  )
}

export default App;
