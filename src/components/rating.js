import React from "react";
import { connect } from "react-redux";
import { filterByStars } from "../actions";

let Rating = ({ stars, filter = false, filterByStars }) => {
  let starsRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsRating = [
        ...starsRating,
        <i
          className="fas fa-star"
          style={{ color: "red" }}
          key={i}
          onClick={() => {
            filter && filterByStars(i + 1);
          }}
        />
      ];
    } else {
      starsRating = [
        ...starsRating,
        <i
          className="fas fa-star"
          style={{ color: "black" }}
          key={i}
          onClick={() => {
            filter && filterByStars(i + 1);
          }}
        />
      ];
    }
  }
  return <div style={{display:'flex'}}>{starsRating}</div>;
};

const mdtp = dispatch => {
  return {
    filterByStars: x => {
      dispatch(filterByStars(x));
    }
  };
};

export default connect(
  null,
  mdtp
)(Rating);
