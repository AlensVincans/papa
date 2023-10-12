import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import Logo from "../../image/logo.png"
import Email from "../../image/menuItems/email.svg"
import Lock from "../../image/menuItems/lock.svg"
import Name from "../../image/menuItems/fio.svg"
import Phone from "../../image/menuItems/phone.svg"
import Eye from "../../image/menuItems/eye.svg"

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <span className="title">Регистрация</span>
        <form>
          <div className="name"> 
            <img src={Name} alt="" /> 
            <input type="text" placeholder="ФИО" />
          </div>
          <div className="email">
            <img src={Email} alt=""/>
            <input type="email" placeholder="Email" />
          </div>
          <div className="phone">
            <img src={Phone} alt=""/>
            <input type="phone" placeholder="Телефон" />
          </div>
          <div className="password">
            <img src={Lock} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <img
              src={Eye}
              alt={showPassword ? "Hide" : "Show"}
              onClick={togglePasswordVisibility}
              className="eyeIcon"
            />
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <p>Я согласен с политикой конфиденциальности</p>
          </div>
          <button>Зарегистрироваться</button>
          <p>
          Есть аккаунт?{ <Link className="link" to={"/login"}> Войти </Link> }
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;