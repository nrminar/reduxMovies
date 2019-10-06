import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';
import Edit from '../Edit/Edit';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  padding: 40px;
  text-align: center;
  color: #083760;
  background-color: #2D71AC;
`
const AppLayout = styled.div`
  background-color: #DFF2FE;
`

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Router>
          <Title>
            <header>
              <h1>Movies</h1>
            </header>
          </Title>
          <div className="App">
              <Route path='/' exact component = {MovieList}/>
              <Route path='/movie/:id' render={({match})=><InfoPage match={match}/>}/>
              <Route path='/edit/:id' render={({match})=><Edit match={match}/>}/>
          </div>
        </Router>
      </AppLayout>
    );
  }
}
const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);
