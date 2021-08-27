import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="lds-circle">
        <div>Loading</div>
      </div>
    );
  }
  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={videoSrc} title={video.snippet.title}></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
