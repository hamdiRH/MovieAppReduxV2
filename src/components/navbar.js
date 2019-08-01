import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { filterByName, filterByType, filterbyfavorite } from "../actions";
import Rating from "./rating";

const navbar = props => {
  return ( 
    <Route>
      <nav className="border fixed">
        <div className="nav-brand">
          <Link className="link" to="./">
            <h4 className="navlogo">
              <img
                src="https://cdn3.iconfinder.com/data/icons/cloud-computing-3-3/49/131-512.png"
                className="logo"
                alt="logo"
              />
              <span>Movie App</span>
            </h4>
          </Link>
        </div>

        <div className="filter">
          <input
            type="text"
            placeholder="Search ..."
            onChange={e => {
              props.findname(e.target.value);
            }}
          />
          <select
            onChange={e => {
              props.findtype(e.target.value);
            }}
          >
            <option>Type</option>
            <option>Action</option>
            <option>SF</option>
            <option>Horror</option>
            <option>Animation</option>
            <option>Adventure</option>
            <option>Mystery</option>
            <option>Documentary</option>
            <option>Romance</option>
          </select>
          <Rating stars={props.rate} filter={true} />

          <i
            className="fas fa-heart"
            onClick={props.favorite}
            style={{ color: props.fav ? "red" : "grey" }}
          />

          <Link className="link" to="./addmovie">
            <button>
              <span>Add Movie</span>
            </button>
          </Link>
        </div>
      </nav>
    </Route>
  );
};
const mdtp = dispatch => {
  return {
    findname: name => {
      dispatch(filterByName(name));
    },
    findtype: type => {
      dispatch(filterByType(type));
    },
    favorite: () => {
      dispatch(filterbyfavorite());
    }
  };
};
const mstp = state => {
  return { fav: state.favorite, rate: state.Findbyrating };
};
export default connect(
  mstp,
  mdtp
)(navbar);
