export const sortMusicians = (musicians, sort) => dispatch => {
  const data = musicians.slice();
  if (sort !== "") {
    data.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    data.sort((a, b) => (a._id > b._id ? 1 : -1));
  }
  return dispatch({
    type: "BY_PRICE",
    payload: {
      sort: sort,
      musicians: data
    }
  });
};

// export const filterMusicians = (musicians, category) => dispatch => {
//   return dispatch({
//     type: "BY_CATEGORY",
//     payload: {
//       category: category,
//       filt:
//         category === ""
//           ? musicians
//           : musicians.filter(a => {
//               a.genre.indexOf(category.toUpperCase());
//             })
//     }
//   });
// };

// export const filterMusicians = (musicians, category) => dispatch => {
//   console.log(category);
//   const data = musicians.filter(function(musicians) {
//     return musicians.genre.find(cat => {
//       return cat === category;
//     });
//   });
//   console.log(data);
//   return dispatch({
//     type: "BY_CATEGORY",
//     payload: { musicians: data, category: category }
//   });
// };

export const filterMusicians = (musicians, category) => dispatch => {
  console.log(musicians);
  let data = [];
  if (category === "") {
    data = musicians;
  } else {
    data = musicians.filter(function(musicians) {
      return musicians.genre.find(cat => {
        return cat === category;
      });
    });
  }
  console.log(data);
  return dispatch({
    type: "BY_CATEGORY",
    payload: { category: category, musicians: data }
   
  });
};
