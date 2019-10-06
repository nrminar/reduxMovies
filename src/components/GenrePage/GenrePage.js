import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import styled from 'styled-components';

const MovieLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
//This component is where Movies of a specific genre will be loaded.
//Right now it doesnt update if you navigate to another genre from this page
//would need to store the reducer state in local state... async problems ensue... idk how to fix
class GenrePage extends Component {
    componentDidMount(){
        this.ID();
    }
    ID = () => {
        this.props.dispatch({ type: 'SET_GENRE', payload: this.props.match.params.id })
    }
    render() {
        return (
            <>
                <h2>{this.props.match.params.id}</h2>
                <MovieLayout>
                    {this.props.reduxState.genreMovie.map((movie)=>{
                    return(
                    <MovieItem movie = {movie}/>
                    )
                    })}
                </MovieLayout>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(GenrePage);