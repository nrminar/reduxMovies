import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';
import Edit from '../Edit/Edit';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
            <Route path='/' exact component = {MovieList}/>
            <Route path='/movie/:id' render={({match})=><InfoPage match={match}/>}/>
            <Route path='/edit/:id' render={({match})=><Edit match={match}/>}/>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);
