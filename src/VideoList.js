import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const videos1 = videos.map(video => {
    return (
      // <img src={video.snippet.thumbnails.default.url} />
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video} />
    );
  });

  return (
    <div className="ui relaxed divided list">
      {videos1}
    </div>
  );

};
export default VideoList;


// import ImageCard from './ImageCard';
// const ImageList = (props) => {
//   const images = props.images.map(image => {
//     return <ImageCard key={image.id} image={image} />
//   });
//   return (
//     <div className="image-list">{images}</div>
//   );
// };