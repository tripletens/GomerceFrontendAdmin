import React from "react";
import { Box, Grid } from "@mui/material";
import "./index.css";
import logo from "../../assets/gomerce_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginValidation } from "./validator";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToken, setUser } from "../../store/auth";
import { useLoginMutation } from "../../store/auth/api";

// welcome to admin login page
const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [
    LoginMutation,
    {
      isLoading: loginIsLoading,
      isError: loginIsError,
      data: loginData,
      error: loginError,
    },
  ] = useLoginMutation();

  const submitLogin = (values, action) => {
    console.log({ values, action });

    LoginMutation(values)
      .unwrap()
      .then((res) => {
        // dispatch(setToken(res.data.token));
        // dispatch(setUser(userData));
        console.log("res status", res);
        if (res.status && res.status === "success") {
          console.log("Login successful");
          const user_data = res ? res.user : null;
          const token =
            res && res.authorisation ? res.authorisation.token : null;

          // save to the store
          dispatch(setToken(token));
          dispatch(setUser(JSON.stringify(user_data)));

          navigate("/admin-dashboard", { replace: true });

          return toast.success(`Login Successful!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((e) => {
        if (e.data && e.data.status === "error") {
          console.log("Login Error");
          return toast.error(`${e.data.message}!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        if (e.data && e.data.status === "FETCH_ERROR") {
          console.log("Login Error");
          return toast.error(`Please connect to the internet to contine!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log("error", e);
      });
  };

  // form validation
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginValidation,
    onSubmit: submitLogin,
  });

  return (
    <>
      {/* navbar comes here  */}
      {/* sidebar comes here  */}
      <Box className="">
        <Grid container spacing={0}>
          <Grid item xs={0} sm={0} md={6}>
            <div className="login_leftside"></div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="login_rightside">
              <div className="login_div">
                <Link to="/">
                  <img src={logo} className="login_logo" alt="logo" />
                </Link>
                <form method="POST" className="login_form">
                  <div className="login_form_group">
                    <label for="email" className="login_label">
                      Email Address:{" "}
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="login_input"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                    />
                  </div>
                  {touched.email ? (
                      <span>
                        <p className="login_password_alert">{errors.email} </p>
                      </span>
                    ) : (
                      ""
                    )}
                  <div className="login_form_group">
                    <label for="password" className="login_label">
                      Password:{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="login_input"
                      placeholder="Enter your password"
                      onChange={handleChange}
                    />
                  </div>
                  {touched.password ? (
                    <span>
                      <p className="login_password_alert">{errors.password} </p>
                    </span>
                  ) : (
                    ""
                  )}
                  <button
                    className="login_button"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    {loginIsLoading ? (
                      <>
                        <div
                          className="spinner-border loginloader"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
