import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [val, setVal] = useState({
    email: "",
    password: "",
  });
  const changeFun = (e) => {
    const { name, value } = e.target;
    setVal((obj) => {
      return {
        ...obj,
        [name]: value,
      };
    });
  };
  const submitFun = (e) => {
    e.preventDefault();
    let localData = localStorage.setItem("user", JSON.stringify(val));
  };
  let localData = localStorage.getItem("user");
  return (
    <>
      {localData ? (
        <div className="navMain">
          <div className="logo">
            <Link to="/" className="siteNamelink">
              <p className="siteName">Your Story</p>
            </Link>
          </div>
          <div></div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Books">Books</Link>
            </li>
            <li>
              <Link to="/Stories">Stories</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
          <div className="dashbord">
            <Link to="/addstory">Add Story</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      ) : (
        <div className="navMain">
          <div className="logo">
            <Link to="/" className="siteNamelink">
              <p className="siteName">Your Story</p>
            </Link>
          </div>
          <div></div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Books">Books</Link>
            </li>
            <li>
              <Link to="/Stories">Stories</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
          <div className="dashbord">
            <p
              onClick={() => {
                document.getElementById("loginMainId").style.display = "block";
              }}
            >
              Login
            </p>
          </div>
        </div>
      )}
      <div className="loginMain" id="loginMainId">
        <form onSubmit={submitFun} className="loginForm">
          <p
            onClick={() => {
              document.getElementById("loginMainId").style.display = "none";
            }}
            className="crose"
          >
            x
          </p>
          <h1>Welcome back! Log in</h1>

          <input
            type="email"
            name="email"
            onChange={changeFun}
            placeholder="Enter Your Email Adderss"
          />
          <input
            type="password"
            name="password"
            onChange={changeFun}
            placeholder="Enter Your Password "
          />
          <div className="checkBokDiv">
            <input type="checkbox" name="iagree" id="checkBok" />
            <label htmlFor="iagree">
              I agree to the terms of use and have read and understand the
              privacy policy
            </label>
          </div>

          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Nav;
