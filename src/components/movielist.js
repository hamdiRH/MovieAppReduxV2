import React from "react";
import { connect } from "react-redux";
import { addtofavorite, deletemovie, updatemovie } from "../actions";
import Rate from "./rating";

class movielist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatemovie: {}
    };
  }
  onchange = e => {
    this.setState({
      updatemovie:{...this.state.updatemovie,[e.target.name]: e.target.value}
      
    });
  };
  render() {
    let arr = this.props.arr;

    this.props.favorite && (arr = arr.filter(el => el.favorite === true));
    arr = arr.filter(el =>
      el.name.toLowerCase().includes(this.props.Findbyname)
    );
    arr = arr.filter(el => el.rate >= this.props.Findbyrating);
    if (this.props.type !== "Type") {
      arr = arr.filter(el =>
        el.type
          .join("")
          .toLowerCase()
          .includes(this.props.type.toLowerCase())
      );
    }
    return (
      <div className="movielist">
        {arr.map((el, i) => (
          <div className="card" style={{ width: "20rem" }} key={i}>
            <img src={el.image} alt="movielist" />

            <div className="card-body">
              <h4 className="card-title">
                {el.name} - <span style={{ color: "blue" }}>{el.year}</span>
              </h4>
              <h5 className="card-subtitle">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Rate stars={el.rate} />

                  <i
                    className="fas fa-heart"
                    style={{ color: el.favorite ? "red" : "grey" }}
                    onClick={() => {
                      this.props.addtofavorite(el.id);
                    }}
                  />
                </div>
              </h5>
 

              <div className="btn">
                <div className="row flex-spaces child-borders">
                  <label
                    className="paper-btn margin"
                    htmlFor="modal-1"
                    onClick={() => {
                      this.setState({ updatemovie: el });
                    }}
                  >
                    Update!
                  </label>
                </div>

                <button
                  onClick={() => {
                    this.props.deletemovie(el.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
          <label className="modal-bg" htmlFor="modal-1" />
          <div className="modal-body" style={{ width: "500px" }}>
            <label className="btn-close" htmlFor="modal-1">
              X
            </label>
            <h4 className="modal-title">Update Movie</h4>
            <h5 className="modal-subtitle">Movie information</h5>
 
            <form>
              <div>
                Movie Name:
                <input
                  type="text"
                  style={{ width: "400px" }}
                  placeholder="Movie Name"
                  name="name"
                  value={this.state.updatemovie.name}
                  onChange={e => {
                    this.onchange(e);
                  }}
                />
              </div>
              <div className="">
                Movie year:{" "}
                <input
                  type="number"
                  placeholder="Movie year"
                  style={{ width: "400px" }}
                  name="year"
                  value={this.state.updatemovie.year}
                  onChange={e => this.onchange(e)}
                />
              </div>
              <div className="">
                Movie rate:{" "}
                <input
                  type="number"
                  placeholder="Movie rate"
                  style={{ width: "400px" }}
                  name="rate"
                  value={this.state.updatemovie.rate}
                  onChange={e => this.onchange(e)}
                />
              </div>
              <div className="">
                Movie image:{" "}
                <input
                  type="text"
                  placeholder="Movie image"
                  style={{ width: "400px" }}
                  name="image"
                  value={this.state.updatemovie.image}
                  onChange={e => this.onchange(e)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              >
             
              </div>
 
              <label
                htmlFor="modal-1"
                className="border"
                style={{ padding: "10px" }}
                onClick={() => {this.props.updatemovie(this.state.updatemovie)}}
              >
                Update
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mdtp = dispatch => {
  return {
    addtofavorite: x => {
      dispatch(addtofavorite(x));
    },
    deletemovie: x => {
      dispatch(deletemovie(x));
    },
    updatemovie: x => {
      dispatch(updatemovie(x));
    }
  };
};
export default connect(
  state => {
    return { ...state };
  },
  mdtp
)(movielist);
