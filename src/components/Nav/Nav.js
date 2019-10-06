import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

//styles for the nav bar
const Toolbar = styled.div`
    position: fixed;
    width: 100%;
    background-color: #083760;
    height: 56px;
    top: 0;
    left: 0;
    display: flex;
    padding: 10px 0 0 1rem;
    z-index: 50;
`
//styles for the home link
const HomeStyle = styled.div`
    margin: 5px 0px;
    text-decoration: none;
    color: #F7AD59;
    padding: 5px 0 5px 1rem;
`
//renders a nav bar at the top of the page
class Nav extends Component {
    render() {
        return (
            <Router>
                <Toolbar>
                    <DrawerToggle/>
                    <Link to='/' style={{ textDecoration: 'none' }}><HomeStyle>Home</HomeStyle></Link>
                </Toolbar>
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Nav));