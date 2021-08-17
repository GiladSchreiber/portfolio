import { useState } from "react";
import classes from "./Details.module.scss";

const detailsData = require("../../data/details.json").details;

function Details(props) {
  const [hoverList, setHoverList] = useState([]);

  function hoverIn(index) {
    var newHoverList = [false, false, false, false, false];
    newHoverList[index] = true;
    setHoverList(newHoverList);
  }

  function hoverOut() {
    setHoverList([]);
  }
  console.log();
  return (
    <div
      className={classes.detailsContainer}
      style={{
        width: props.width,
        transform: "translateY(" + props.bottom + ")",
      }}
    >
      <div className={classes.details}>
        {detailsData.map(({ type, detail, url }, index) => {
          const isActive =
            hoverList.length > 0 && !hoverList[index] ? false : true;
          return (
            <a href={url} key={type}>
              <div
                className={
                  isActive
                    ? `${classes.icon} ${classes.iconActive}`
                    : `${classes.icon} ${classes.iconNotActive}`
                }
                onMouseEnter={() => hoverIn(index)}
                onMouseOut={hoverOut}
                style={{
                  WebkitMaskImage: "url(/icons/" + type + "Icon.png)",
                  maskImage: "url(/icons/" + type + "Icon.png)",
                }}
              />
              {isActive && hoverList.length > 0 && (
                <div className={classes.hoverDetails}>{detail}</div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
