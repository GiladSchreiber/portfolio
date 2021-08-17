import { useState, useRef } from "react";

import classes from "./Home.module.scss";
import Details from "../Details/Details";
import Background from "../Background/Background";
import AboutMe from "../AboutMe/AboutMe";
import ContentPreview from "../ContentPreview/ContentPreview";

const data = require("../../data/details.json");
const handlerLeftPos = data.handlers.left;
const handlerRightPos = data.handlers.right;
const contentPreviews = data.contentPreview;

function Home() {
  const [rightPosition, setRightPosition] = useState(handlerRightPos.initial);
  const [leftPosition, setLeftPosition] = useState(handlerLeftPos.initial);
  const [whatPosition, setWhatPosition] = useState("0");
  const [headerWidth, setHeaderWidth] = useState("100vw");
  const [headerTop, setHeaderTop] = useState(0);
  const [detailsBottom, setDetailsBottom] = useState(0);
  const [shutDownVideo, setShutDownVideo] = useState(true);

  const [showPreviewContent, setShowPreviewContent] = useState(false);

  const rightHalfRef = useRef();

  function rightHandleHover() {
    if (rightPosition !== handlerRightPos.clicked) {
      setRightPosition(handlerRightPos.hovered);
    }
  }

  function rightHandleOut() {
    if (rightPosition !== handlerRightPos.clicked) {
      setRightPosition(handlerRightPos.initial);
    }
  }

  function rightHandleClicked() {
    setRightPosition(handlerRightPos.clicked);
    rightHalfRef.current.style.transform = "translateX(-60vw)";
    setShutDownVideo(true);
    setHeaderWidth("40vw");
  }

  function leftHandleHover() {
    if (leftPosition !== handlerLeftPos.clicked) {
      setLeftPosition(handlerLeftPos.hovered);
    }
  }

  function leftHandleOut() {
    if (leftPosition !== handlerLeftPos.clicked) {
      setLeftPosition(handlerLeftPos.initial);
    }
  }

  function leftHandleClicked() {
    setHeaderWidth("100vw");
    rightHalfRef.current.style.transform = "translateX(0)";
    setLeftPosition(handlerLeftPos.clicked);
    setRightPosition(handlerRightPos.clicked);
    setWhatPosition(handlerLeftPos.clicked);
    setShutDownVideo(true);
    setShowPreviewContent(true);
    setHeaderTop("40vh");
    setDetailsBottom("-42vh");
  }

  function reset() {
    setLeftPosition(handlerLeftPos.initial);
    setRightPosition(handlerRightPos.initial);
    setWhatPosition(0);
    setShutDownVideo(false);
    setHeaderWidth("100vw");
    setShowPreviewContent(false);
    rightHalfRef.current.style.transform = "translateX(0)";
    setHeaderTop(0);
    setDetailsBottom("0");
  }

  return (
    <div>
      <div className={classes.background}>
        {shutDownVideo ? null : <Background />}
        <div
          className={classes.header}
          style={{
            width: headerWidth,
            transform: "translateY(" + headerTop + ")",
          }}
          onClick={reset}
        >
          Gilad Schreiber
        </div>
        <Details width={headerWidth} bottom={detailsBottom} />
      </div>
      <div
        className={classes.rightHalf}
        style={{ right: "-60vw" }}
        ref={rightHalfRef}
      >
        <AboutMe />
      </div>
      {contentPreviews.map(
        ({
          title,
          width,
          height,
          top,
          left,
          topBefore,
          leftBefore,
          previews,
        }) => {
          return (
            <ContentPreview
              title={title}
              width={width}
              height={height}
              top={topBefore}
              left={leftBefore}
              transformY={showPreviewContent ? top : 0}
              transformX={showPreviewContent ? left : 0}
              previews={previews}
            />
          );
        }
      )}
      <div
        className={`${classes.handle} ${classes.rightHandle}`}
        onMouseEnter={rightHandleHover}
        onMouseOut={rightHandleOut}
        onClick={rightHandleClicked}
        style={{ right: rightPosition }}
      >
        WHO I AM
      </div>
      <div
        className={`${classes.handle} ${classes.leftHandle}`}
        onMouseEnter={leftHandleHover}
        onMouseOut={leftHandleOut}
        onClick={leftHandleClicked}
        style={{ left: leftPosition }}
      >
        WHAT I DO
      </div>
      <div
        className={`${classes.handle} ${classes.what}`}
        style={{ left: whatPosition }}
      >
        WHAT
      </div>
    </div>
  );
}

export default Home;
