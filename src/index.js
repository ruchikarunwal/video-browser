import React from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import youtube from '../src/api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
class App extends React.Component {
  state = { videos: [], selectedVideo: ' ' };
  componentDidMount() {
    this.onTermSubmit('cartoon');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyB0aZkvpXl_bNCoahlMBSLyFhK1qQu4Tis'

      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} />
            </div>
          </div>
        </div>

      </div>
    );

  }
};
ReactDOM.render(<App />, document.querySelector("#root"));