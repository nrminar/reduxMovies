import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import styled from 'styled-components';

const MovieLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

class MovieList extends Component {
    componentDidMount = () =>{
        this.getMovies();
    }
    getMovies = () =>{
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }
    render() {
        return (
        <MovieLayout>
            {this.props.reduxState.movies.map((movie)=>{
                return(
                <MovieItem movie = {movie}/>
                )
                })}
        </MovieLayout>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieList);