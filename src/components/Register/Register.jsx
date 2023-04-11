import { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { validateFormDataRegister } from "../../helpers";
import { actRegisterAsync } from "../../store/auth/action";
import cls from "classnames";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const [shobtn, setShowbtn] = useState(
    cls("btnCreate", {
      open: true,
      close: false,
    })
  );
  const [formData, setFormData] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    againPassword: {
      value: "",
      error: "",
    },
  });

  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();
    const error = validateFormDataRegister({ value, name });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
  }

  function checkFormIsValid() {
    const newFormData = {};
    Object.keys(formData).forEach((key) => {
      const formValue = formData[key];
      newFormData[key] = {
        value: formValue.value,
        error: validateFormDataRegister({ value: formValue.value, name: key }),
      };
    });
    setFormData(newFormData);
    if (
      newFormData.email.error.trim() ||
      newFormData.username.error.trim() ||
      newFormData.password.error.trim()
    ) {
      return false;
    }
    if (newFormData.password.value !== newFormData.againPassword.value) {
      return false;
    }

    return true;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const isValid = checkFormIsValid();
    if (!isValid) {
      return;
    }
    cls("btnCreate", {
      open: false,
      close: true,
    });
    const actAsync = actRegisterAsync({
      username: formData.username.value,
      email: formData.email.value,
      password: formData.password.value,
    });
    dispatch(actAsync).then((res) => {
      if (!res.ok) {
        setFormError(res.error);
        console.log(formError);
      }
      navigate("/login");
      setShowbtn(
        cls("btnCreate", {
          open: true,
          close: false,
        })
      );
    });
  }

  return (
    <section className="register-container">
      <div className="register-title"> Sign up </div>
      {formError && <p className="form-controll_error">{formError}</p>}
      <form className="form-control" onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formData.email.value}
          error={formData.email.error}
          onChange={handleOnChange}
        />
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
          placeholder="Enter your username"
          name="password"
          value={formData.password.value}
          error={formData.password.error}
          onChange={handleOnChange}
        />
        <label>AGAIN PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="againPassword"
          value={formData.againPassword.value}
          error={formData.againPassword.error}
          onChange={handleOnChange}
        />
        <button id="btn" className={shobtn} type="submit">
          Create account
        </button>
      </form>
    </section>
  );
};

export default Register;
