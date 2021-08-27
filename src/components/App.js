import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { debounce } from 'throttle-debounce';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onFormSubmit('React');
  }
  onFormSubmit = debounce(300, false, async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  });

  isArrayEmpty = () => {
    const { videos } = this.state;
    if (videos.length > 0) {
      return `Search Output ${videos.length}`;
    }
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    const { videos } = this.state;
    return (
      <div className="ui container app">
        <SearchBar onSubmit={this.onFormSubmit} videoLength={videos.length} />
        <main className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
