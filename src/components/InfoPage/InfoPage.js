import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import InfoItem from '../InfoItem/InfoItem';
import GenreItem from '../GenreItem/GenreItem';
import styled from 'styled-components';

//button styles
const Button = styled.button`
  color: #3960A4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3960A4;
  border-radius: 10px;
`;
//edit button styles: button with color changes
const EditButton = styled(Button)`
    color: #309053;
    border: 2px solid #309053;
`
//movie styles
const Movie = styled.div`
    background: #eee;
    padding: 30px;
    border: 4px solid #09253E;
    margin: 10px;
    border-radius: 10px;
`
//renders the movie that was clicked on, store in the infoMovie reducer
//two bnuttons that allow you to go back to the list of movies or to edit this movies info
class InfoPage extends Component {
    state = {
        movies: []
    }
    async componentDidMount(){
        this.ID();
        this.movieMap();
    }
    ID = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_INFO_MOVIES', payload: this.props.match.params.id })
    }
    movieMap = () =>{
        this.setState({movies: this.props.reduxState.infoMovie})
        console.log('Exit MovieMap')
    }
    
    handelClick=()=>{
        this.props.history.push('/');
    }
    edit = () =>{
        this.props.history.push(`/edit/${this.props.match.params.id}`);
    }

    render() {
        return (
            <Movie>
                <Router>
                    {this.props.reduxState.infoMovie.map((movie, index)=>{
                    return(
                        <GenreItem movie = {movie} index = {index}/>
                    )
                    })}
                    {this.props.reduxState.infoMovie.map((movie, index)=>{
                        if(index<1){
                            return(
                                <InfoItem movie = {movie}/>
                            )
                        }
                    })}
                    <Button
                        onClick = {this.handelClick}>Back to Movies
                    </Button>
                    <EditButton
                        onClick = {this.edit}>Edit
                    </EditButton>
                </Router>
            </Movie>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(InfoPage));