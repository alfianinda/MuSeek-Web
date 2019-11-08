import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sortMusicians, filterMusicians } from "../store/actions/filterAction";
import "../assets/scss/Filter.scss";

class Filter extends Component {
  render() {
    return (
      <div className="row1 mb-50">
        <div className="col-12">
          <div className="product-topbar d-xl-flex align-items-end justify-content-between">
            <div className="total-products">
              <p>{`${this.props.count} musicians found`}</p>
              <div className="view d-flex">
                <Link to="#">
                  <i className="fa fa-th-large" aria-hidden="true" />
                </Link>
                <Link to="#">
                  <i className="fa fa-bars" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="flex-filter">
              <div className="product-sorting d-flex margin-filter">
                <div className="sort-by-date d-flex align-items-center">
                  <p>Sort by</p>
                  <form action="#" method="get">
                    <select
                      value={this.props.sort}
                      onChange={e =>
                        this.props.sortMusicians(
                          this.props.musicians,
                          e.target.value
                        )
                      }
                    >
                      <option value="">Price</option>
                      <option value="lowest">Lowest to highest</option>
                      <option value="highest">Highest to lowest</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="product-sorting d-flex margin-filter">
                <div className="sort-by-date d-flex align-items-center">
                  <p>Sort by</p>
                  <form action="#" method="get">
                    <select
                      value={this.props.category}
                      onChange={e =>
                        this.props.filterMusicians(
                          this.props.musicians,
                          e.target.value
                        )
                      }
                    >
                      <option value="">Genre</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Dangdut">Dangdut</option>
                      <option value="Musical Theatre">Musical Theatre</option>
                      <option value="Rock">Rock</option>
                      <option value="Hip Hop">Hip Hop</option>
                      <option value="Classical">Classical</option>
                      <option value="Country">Country</option>
                      <option value="Heavy Metal">Heavy Metal</option>
                      <option value="Pop">Pop</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  musicians: state.listMusicianReducer.musicians,
  sort: state.listMusicianReducer.sort,
  category: state.listMusicianReducer.category
});

export default connect(
  mapStateToProps,
  { sortMusicians, filterMusicians }
)(Filter);
