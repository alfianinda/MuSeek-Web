const listMusician = currentCards.map(musician => {
    if (musician.genre && musician.genre.length !== 0) {
  return (
    <div className="col-12 col-md-4 col-xl-4">
      <div className="single-product-wrapper" key={musician._id}>
        <div className="product-img">
          <Picture picture={musician} />
        </div>

        <div className="ratings-cart ratings">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          {/* <i className="circle left"></i> <i className="circle right"></i> */}
        </div>

        <div className="product-description d-flex align-items-center justify-content-between">
          <div className="product-meta-data">
            <div className="line" />
            <Link to={`/detail/${musician._id}`}>
              <h6>{musician.name}</h6>
              {musician.price ? (
                <h6>Start from Rp {Rupiah(musician.price)},00/ Event</h6>
              ) : (
                <h6>
                  <i>Price is not set by musician</i>
                </h6>
              )}
              {/* {musician.skill.map((skill, index) => {
              return <h6 key="index">{(index ? "," : "") + skill}</h6>;
            })} */}
              {/* <h6>
              {musician.skill
                .toString()
                .split(",")
                .join(", ")}
            </h6> */}
              <h6>{musician.city}</h6>
            </Link>
          </div>

          <div className="ratings-cart text-right">
            <div className="cart">
              <Link
                to={{
                  pathname: "/bookform",
                  state: { musicianId: musician._id }
                }}
                // to="#"
                onClick={() => this.handleAdd(musician._id)}
                data-toggle="tooltip"
                data-placement="left"
                title="Add Event"
                style={{ margin: "10px" }}
              >
                <img src="img/core-img/cart.png" alt="" />
              </Link>

              <Link
                to="#"
                onClick={() => this.handleSubmit(musician._id)}
                data-toggle="tooltip"
                data-placement="left"
                title="Add to Favorite"
                style={{ margin: "10px" }}
              >
                <img src="img/core-img/favorites.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );