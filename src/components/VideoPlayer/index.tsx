import React, { useState } from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnailUrl, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src={videoUrl}
          controls
          autoPlay
        />
      </div>
    );
  }

  return (
    <div
      className={styles.thumbnailContainer}
      style={{ backgroundImage: `url(${thumbnailUrl})` }}
      onClick={handlePlayClick}
    >
      <div className={styles.playButton}>
        <svg
          className={styles.playIcon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 5v14l11-7z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default VideoPlayer;