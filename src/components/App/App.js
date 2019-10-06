import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';
import Edit from '../Edit/Edit';
import Nav from '../Nav/Nav';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import BackDrop from '../Backdrop/Backdrop';
import GenrePage from '../GenrePage/GenrePage';
import styled from 'styled-components';

//styling for header
const Title = styled.div`
  font-size: 1.5em;
  padding: 50px 5px 5px 5px;
  text-align: center;
  color: #F7AD59;
  background-color: #2D71AC;
`
//global style
const AppLayout = styled.div`
  background-color: #DFF2FE;
  height: 100%;
`
/* main App component-
checks to see if the drawer reducer is true and then renders two components conditionally
render the title div and then creates all the necessary routes
*/
class App extends Component {
  render() {
    let sidedrawer;
    let backdrop;
    if(this.props.reduxState.drawer){
      sidedrawer = <Sidedrawer />;
      backdrop = <BackDrop />
    }
    return (
      <AppLayout>
        <Router>
          <Title>
            <header>
              <h1>Movies</h1>
              <Nav drawerClickHandler = {this.drawerClickHandle}/>
              {sidedrawer}
              {backdrop}
            </header>
          </Title>
          <div className="App">
              <Route path='/' exact component = {MovieList}/>
              <Route path='/movie/:id' render={({match})=><InfoPage match={match}/>}/>
              <Route path='/edit/:id' render={({match})=><Edit match={match}/>}/>
              <Route path='/genres/:id' render={({match})=><GenrePage match={match}/>}/>
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
