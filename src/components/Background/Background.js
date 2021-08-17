import { useRef, useEffect, useState } from "react";
import classes from "./Background.module.scss";

const videoUrls = require("../../data/details.json").videoUrls;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var topUrl = videoUrls[0];
var bottomUrl = videoUrls[1];

const fullOpacityVideo = `${classes.backgroundVideo} ${classes.fullOpacity}`;
const noOpacityVideo = `${classes.backgroundVideo} ${classes.noOpacity}`;
const fullOpacityOverlay = `${classes.overlay} ${classes.fullOpacity}`;
const noOpacityOverlay = `${classes.overlay} ${classes.noOpacity}`;

function Background(props) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(!showVideo);
    }, 10000);
    setTimeout(() => {
      const newIndex = videoIndex + 1;
      const newUrl = videoUrls[newIndex % videoUrls.length];
      setVideoIndex(newIndex);
      if (newIndex % 2 === 0) {
        topUrl = newUrl;
      } else {
        bottomUrl = newUrl;
      }
    }, 2000);
  }, [showVideo]);

  const startingSec = 8 + getRandomInt(10);
  return (
    <div className={classes.wrapper}>
      <div className={fullOpacityOverlay} />
      <video
        autoPlay
        muted
        loop
        className={!showVideo ? noOpacityVideo : fullOpacityVideo}
        key={topUrl}
        style={{ zIndex: 2 }}
      >
        <source
          src={
            "/media/" + topUrl + "#t=" + startingSec + "," + startingSec + 50
          }
          type="video/mp4"
          ref={videoRef}
        />
      </video>
      <video
        autoPlay
        muted
        loop
        className={fullOpacityVideo}
        key={bottomUrl}
        style={{ zIndex: 1 }}
      >
        <source
          src={
            "/media/" + bottomUrl + "#t=" + startingSec + "," + startingSec + 50
          }
          type="video/mp4"
          ref={videoRef}
        />
      </video>
    </div>
  );
}

export default Background;
