import CarouselMain from "../../components/carousel/Carousel";
import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png"
import Email from "../../image/menuItems/email.svg"
import Lock from "../../image/menuItems/lock.svg"
import Eye from "../../image/menuItems/eye.svg"

function Main() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main">
      <div className="carouserContainer">
        <CarouselMain />
      </div>
    <div className="formContainer1">
      <div className="formWrapper1">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <span className="title">Вход</span>
        <form>
          <div className="email">
            <img src={ Email } alt=""/>
            <input type="email" placeholder="Email" />
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
          <button>Войти</button>
          <p>
            Нет аккаунта?{ <Link className="link" to={"/registration"}> Зарегистрироваться </Link> }
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Main;
