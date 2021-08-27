import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };
  onChangeHandler = event => {
    this.setState({ term: event.target.value });
  };
  formHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    const { videoLength } = this.props;
    return (
      <div className="ui segment">
        <form onSubmit={this.formHandler} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search Here .."
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
        <p>I Have {videoLength} videos.</p>
      </div>
    );
  }
}

export default SearchBar;
