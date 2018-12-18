import React, { Component } from 'react';
import { getStoryDetails } from './actions';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getStoryDetails(1));
    }

    render() {
        return(
            <h1>Page yes!</h1>
        )
    }
}

export default Page;


// One component that renders the object 
// with the right IDs,
// have it push each page to a history 
// show first element in history array, 
// add back arrow and pop off element in array