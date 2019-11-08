import React, { Component } from "react";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/dataAction";
import Filter from "./Filter";
import MusicianList from "./MusicianList";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

class MusicianPage extends Component {
  state = {
    currentPage: 1,
    cardsPerPage: 6
  };

  handleClick = id => {
    this.setState({
      currentPage: id
    });
    console.log(this.state.currentPage);
  };

  render() {
    return (
      <div>
        <div className="d-flex clearfix">
          <div className="content p-0 mt-50">
            <div className="container">
              <Filter count={this.props.musicians.length} />
              <MusicianList
                currentPage={this.state.currentPage}
                cardsPerPage={this.state.cardsPerPage}
              />
              <Pagination
                cardsPerPage={this.state.cardsPerPage}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicians: state.listMusicianReducer.musicians
  };
};

export default connect(
  mapStateToProps,
  { getMusician }
)(MusicianPage);
