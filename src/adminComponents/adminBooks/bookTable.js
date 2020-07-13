import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MaterialTable from "material-table";

import * as bookActions from "../../redux/actions/bookActions";

const Table = ({ actions, books, ...props }) => {
  //   const [books, setBooks] = useState({ ...props.books });
  const data = [
    {
      name: "raza",
      age: 30,
    },
    {
      name: "shabeeh",
      age: 25,
    },
    {
      name: "mohamd",
      age: 25,
    },
    {
      name: "ahmad",
      age: 35,
    },
  ];

  const getImageUrl = (link) => {
    let mediaId = "";
    link.split("/").forEach((c, index, array) => {
      if (array[index - 1] === "d") {
        mediaId = c;
      }
    });

    return `https://drive.google.com/thumbnail?id=${mediaId}`;
  };

  const columns = [
    {
      title: "",
      field: "bookLink",
      field: "photoLink",
      render: (rowData) => (
        <a href={rowData.bookLink} target="_blank" rel="noopener noreferrer">
          <img src={rowData.photoLink} alt="" />
        </a>
      ),
    },
    { title: "Name", field: "name" },
    { title: "Author", field: "author" },
    { title: "Translator", field: "translator" },
    { title: "Category", field: "category" },
    { title: "Language", field: "language" },
  ];
  console.log("bookTable books: ", books);

  useEffect(() => {
    if (books.length < 0) {
      actions.loadBooks().catch((err) => alert("error loading books ", err));
    }
  }, []);

  return (
    <div>
      {books.length > 0 ? (
        <MaterialTable
          title="Book Tabe"
          data={books}
          columns={columns}
          options={{
            search: false,
            paging: false,
            filtering: false,
            exportButton: true,
          }}
        />
      ) : (
        "loading"
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
