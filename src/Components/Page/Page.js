import React, { Component } from 'react';
import { getStoryDetails } from './actions';

class Page extends Component {
  constructor(props) {
    super(props);
    this.getStoryDetails = this.getStoryDetails.bind(this);
  }

  getStoryDetails(e) {
    const { dispatch } = this.props;
    const num = e.target.value
    dispatch(getStoryDetails(num));
  }

  render() {
    const { pageInfo } = this.props
    if (pageInfo) {
      return (
        <div className='container'>
          <h1>Story</h1>
          <div>{pageInfo.text}</div>
          <button value={pageInfo.choices[0].next} onClick={this.getStoryDetails}>{pageInfo.choices[0].text}</button>
          <button value={pageInfo.choices[1].next} onClick={this.getStoryDetails}>{pageInfo.choices[1].text}</button>
        </div>
      )
    }
    else {
      return (
        <div className='container'>
          <h1>Welcome Page</h1>
          <p>Do you want to play a fun story game?</p>
          <button value={1} onClick={this.getStoryDetails}>Start</button>
        </div>
      )
    }
  }
}

export default Page;


// One component that renders the object 
// with the right IDs,
// have it push each page to a history 
// show first element in history array, 
// add back arrow and pop off element in array