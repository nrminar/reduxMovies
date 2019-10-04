import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class MovieItem extends Component {
    moreInfo = (id)=>{
        this.props.history.push(`/movie/${id}`)
    }

    render() {
        return (
            <Router>
                <div >
                    <img onClick={()=>this.moreInfo(this.props.movie.id)} src = {this.props.movie.poster}/>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.description}</p>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));