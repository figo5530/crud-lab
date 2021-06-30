import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  hanldeSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label>add review</label>
        <form onSubmit={this.hanldeSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
