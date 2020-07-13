import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "@material-ui/core/styles";

import AdminRoutes from "./adminRoutes";
import NavBar from "./navBar";
import LoginRegisterModals from "./users/loginRegisterModals";
import theme from "./MaterialUIStyles/theme";

import * as userActions from "../redux/actions/userActions";
import * as bookActions from "../redux/actions/bookActions";

class Dashboard extends Component {
  state = {
    loginModalIsOpen: false,
    registerModalIsOpen: false,
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.loadBooks().catch((err) => alert("error loading books", err));
  }

  toggleLoginModal = () => {
    this.setState({
      loginModalIsOpen: !this.state.loginModalIsOpen,
    });
  };

  toggleRegisterModal = () => {
    this.setState({
      registerModalIsOpen: !this.state.registerModalIsOpen,
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <header className="headerNavBar">
          <LoginRegisterModals
            toggleRegisterModal={this.toggleRegisterModal}
            toggleLoginModal={this.toggleLoginModal}
            loginModalIsOpen={this.state.loginModalIsOpen}
            registerModalIsOpen={this.state.registerModalIsOpen}
            history={this.props.history}
          />
          <NavBar
            token={this.props.users.token}
            loginModalIsOpen={this.state.loginModalIsOpen}
            toggleLoginModal={this.toggleLoginModal}
            logoutUser={this.props.actions.logoutUser}
          />
        </header>
        <main className="dashboard">
          <AdminRoutes />

          {/* 
        {token ? (
          <NavBar />
        ) : (
          <button
            className="btn"
            onClick={() => this.setState({ loginModalIsOpen: true })}
          >
            Log In Here
          </button>
        )} */}
        </main>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      logoutUser: bindActionCreators(userActions.logoutUser, dispatch),
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
