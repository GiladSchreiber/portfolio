import classes from "./ContentPreview.module.scss";

function ContentPreview(props) {
  const previewWidth = parseFloat(props.width) - 2;
  const previewHeight = parseFloat(props.height) - 9;

  return (
    <div
      className={classes.wrapper}
      style={{
        width: props.width + "vw",
        height: props.height + "vh",
        top: props.top,
        left: props.left,
        transform:
          "translate(" + props.transformX + "," + props.transformY + ")",
      }}
    >
      <div className={classes.header}>{props.title}</div>
      <div
        className={classes.previewsWrapper}
        style={{
          width: previewWidth + "vw",
          height: previewHeight + "vh",
          flexDirection: props.flexDirection,
        }}
      >
        {props.previews.map(({ width, height, bottom, left, url }) => {
          return (
            <div
              className={classes.preview}
              style={{
                width: width,
                height: height,
                bottom: bottom,
                left: left,
              }}
            >
              <video
                autoPlay
                muted
                loop
                className={classes.previewVideo}
                key={url}
                style={{ zIndex: 2 }}
              >
                <source src={"/media/" + url} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentPreview;
