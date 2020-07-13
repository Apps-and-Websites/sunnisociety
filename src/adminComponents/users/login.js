import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import * as userActions from "../../redux/actions/userActions";

function Login(props) {
  return (
    <Form className="form">
      <h2 className="heading-secondary">Log In</h2>
      <Field
        className="form__input"
        type="text"
        name="username"
        placeholder="username"
        autoComplete="on"
      />
      <Field
        className="form__input"
        type="password"
        name="password"
        placeholder="password"
        autoComplete="on"
      />
      <button className="btn" type="submit">
        Log In
      </button>
      <span>
        <p
          className="btn-inline"
          onClick={() => {
            props.closeLoginModal();
            props.toggleRegisterModal();
          }}
        >
          Register Here
        </p>
      </span>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  //==============validate schema===========
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is require"),
    password: Yup.string().required("password is required"),
  }),
  //=============end of validation===========
  handleSubmit(values, { props, resetForm }) {
    props.actions
      .loginUser(values)
      .then((res) => {
        props.closeLoginModal();
      })
      .catch((err) => console.log(err));
  },
})(Login);

FormikLoginForm.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loginUser: bindActionCreators(userActions.loginUser, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikLoginForm);
