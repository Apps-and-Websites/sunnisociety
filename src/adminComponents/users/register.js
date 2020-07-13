import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import * as userActions from "../../redux/actions/userActions";

function Register() {
  return (
    <Form className="form">
      <h2 className="heading-secondary">Register Here</h2>
      <Field
        type="text"
        name="username"
        placeholder="username"
        autoComplete="on"
      />
      <Field
        type="password"
        name="password"
        placeholder="password"
        autoComplete="on"
      />
      <button className="btn" type="submit">
        Sign Up
      </button>
    </Form>
  );
}

const FormikRegisterForm = withFormik({
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
      .registerUser(values)
      .then((res) => {
        props.toggleRegisterModal();
      })
      .catch((err) => console.log("registratione error: ", err));
  },
})(Register);

FormikRegisterForm.propTypes = {
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
      registerUser: bindActionCreators(userActions.registerUser, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikRegisterForm);

// connect(mapStateToProps, mapDispatchToProps)(FormikRegisterForm)
