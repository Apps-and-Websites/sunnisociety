import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as bookActions from "../redux/actions/bookActions";

class bookPage extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.loadBooks().catch((err) => alert("error loading books", err));
  }

  render() {
    console.log("books from page: ", this.props.books);
    return (
      <section className="bookContainer">
        <h1>Book Container</h1>
      </section>
    );
  }
}

bookPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("state: ", state);
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
