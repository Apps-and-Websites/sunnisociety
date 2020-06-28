import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";

import * as bookActions from "../../redux/actions/bookActions";
import BookCard from "./bookCard";

class bookPage extends Component {
  componentDidMount() {
    const { actions, books } = this.props;
    if (books.length === 0) {
      actions.loadBooks().catch((err) => alert("error loading books", err));
    }
  }

  render() {
    const { books } = this.props;
    return (
      <section className="bookContainer paddingTop-big">
        <h1 className="heading-primary">Our Books</h1>

        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <Loader
            type="Circles"
            color="green"
            height={200}
            width={200}
            className="marginTop-big"
          />
        )}
      </section>
    );
  }
}

bookPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(bookPage);
