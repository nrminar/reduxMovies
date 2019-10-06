import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Movie = styled.div`
    background: #eee;
    padding: 30px;
    border: 4px solid #09253E;
    margin: 10px;
    border-radius: 10px;
`
//called on the movie list page and on the genrePage
//renders the moves that are passed to it and attaches an onclick
class MovieItem extends Component {
    moreInfo = (id)=>{
        this.props.history.push(`/movie/${id}`)
    }

    render() {
        return (
            <Movie>
                <Router>
                    <div >
                        <img onClick={()=>this.moreInfo(this.props.movie.id)} src = {this.props.movie.poster}/>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.description}</p>
                    </div>
                </Router>
            </Movie>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));