import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateFormData } from "../../helpers";
import { useDispatch } from "react-redux";
import { actLoginAsync } from "../../store/auth/action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();
    const error = validateFormData({ value, name });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
    setIsFormDirty(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const isValid = checkFormIsValid;
    if (!isValid) {
      console.log("Form Error");
      return;
    }
    setFormError("");
    dispatch(
      actLoginAsync(formData.username.value, formData.password.value)
    ).then((res) => {
      if (res.ok) {
        navigate("/");
      } else {
        setFormError(res.error);
      }
    });
  }

  function checkFormIsValid() {
    if (!isFormDirty) {
      setFormData({
        username: {
          value: "",
          error: validateFormData({
            value: "",
            name: "username",
          }),
        },
        password: {
          value: "",
          error: validateFormData({
            value: "",
            name: "password",
          }),
        },
      });
    }
    if (formData.username.error || formData.password.error) {
      return false;
    }
    return true;
  }

  return (
    <section className="login-container">
      <div className="login-title"> Log in</div>
      {formError && <p className="form-controll_error">{formError}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={formData.username.value}
          error={formData.username.error}
          name="username"
          onChange={handleOnChange}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password.value}
          error={formData.password.error}
          name="password"
          onChange={handleOnChange}
        />
        <button type="submit"> Continue </button>
      </form>
      <div className="login-register"> Don't have an account yet? </div>
      <Link className="login-register-link" to="/register">
        Register one for free{" "}
      </Link>
    </section>
  );
};

export default Login;
