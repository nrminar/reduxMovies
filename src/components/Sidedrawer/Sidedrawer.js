import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


const Toollist = styled.div`
    text-decoration: none;
    color: #243F89;
    padding: 0;
    margin: 0;
    list-style: none;
`
const Toollinks = styled.div`
    display: flex;
    align-items: center;
    color: #243F89;
    padding: 0 1rem;
    list-style: none;
    background-color: #DFF2FE;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    z-index: 200;
`
const sideDrawer = () => (
        <Router>
            <Toollinks>
                <div>Genres</div>
                <Toollist>
                    <Link to='/genres/Adventure' style={{ textDecoration: 'none' }}><li>Adventure</li></Link>
                    <Link to='/genres/Animated' style={{ textDecoration: 'none' }}><li>Animated</li></Link>
                    <Link to='/genres/Biographical' style={{ textDecoration: 'none' }}><li>Biographical</li></Link>
                    <Link to='/genres/Comedy' style={{ textDecoration: 'none' }}><li>Comedy</li></Link>
                    <Link to='/genres/Disaster' style={{ textDecoration: 'none' }}><li>Disaster</li></Link>
                    <Link to='/genres/Drama' style={{ textDecoration: 'none' }}><li>Drama</li></Link>
                    <Link to='/genres/Epic' style={{ textDecoration: 'none' }}><li>Epic</li></Link>
                    <Link to='/genres/Fantasy' style={{ textDecoration: 'none' }}><li>Fantasy</li></Link>
                    <Link to='/genres/Musical' style={{ textDecoration: 'none' }}><li>Musical</li></Link>
                    <Link to='/genres/Romantic' style={{ textDecoration: 'none' }}><li>Romantic</li></Link>
                    <Link to='/genres/Science Fiction' style={{ textDecoration: 'none' }}><li>Science Fiction</li></Link>
                    <Link to='/genres/Space-Opera' style={{ textDecoration: 'none' }}><li>Space Opera</li></Link>
                    <Link to='/genres/Superhero' style={{ textDecoration: 'none' }}><li>Superhero</li></Link>
                </Toollist>
            </Toollinks>
        </Router>
)

export default sideDrawer;