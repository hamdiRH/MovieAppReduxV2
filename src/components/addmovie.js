import React from "react";
import { connect } from "react-redux";
import { addFilm } from "../actions";

class addmovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: [],
      year: null,
      rate: 0,
      favorite: false,
      image: "https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg"
    };
  }
  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container addmovie">
        <h1>Add New Movie</h1>
        <div className="">
          Movie Name:{" "}
          <input
            type="text"
            placeholder="Movie Name"
            name="name"
            onChange={e => this.onchange(e)}
          />
        </div>
        <div className="">
          Movie year:{" "}
          <input
            type="number"
            placeholder="Movie year"
            name="year"
            onChange={e => this.onchange(e)}
          />
        </div>
        <div className="">
          Movie rate:{" "}
          <input
            type="number"
            placeholder="Movie rate"
            name="rate"
            onChange={e => this.onchange(e)}
          />
        </div>

         <div className="">
          Movie image:
          <input
            type="text"
            placeholder="Movie image"
            name="type"
            onChange={e => this.onchange(e)}
          />
        </div>
      

        <button
          onClick={() => {
            this.props.newmovie(this.state);
          }}
        >
          Add movie
        </button>
      </div>
    );
  }
}
const mdtp = dispatch => {
  return {
    newmovie: x => {
      dispatch(addFilm(x));
    }
  };
};
export default connect(
  null,
  mdtp
)(addmovie);
