import React, { Component } from "react";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/dataAction";
import "../assets/scss/Pagination.scss";

class Pagination extends Component {
  componentDidMount() {
    this.props.getMusician();
  }

  render() {
    const { cardsPerPage, handleClick } = this.props;

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.musicians.length / cardsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page-item"
          key={number}
          id={number}
          onClick={() => handleClick(number)}
        >
          <span className="page-link">{number}</span>
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-12">
          <nav aria-label="navigation">
            <ul className="pagination justify-content-end mt-50">
              {renderPageNumbers}
            </ul>
          </nav>
        </div>
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
)(Pagination);
