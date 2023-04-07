import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ClearIcon from "@mui/icons-material/Clear";
const Nav = () => {
  const navigater = useNavigate();
  const [val, setVal] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const navsideIconFun = () => {
    document.getElementById("navsideIconId").style.display = "none";
    document.getElementById("navclearIconId").style.display = "block";
    document.getElementById("secnavMainId").style.display = "block";
  };
  const navclearIconFun = () => {
    document.getElementById("navclearIconId").style.display = "none";
    document.getElementById("navsideIconId").style.display = "block";
    document.getElementById("secnavMainId").style.display = "none";
  };
  const changeFun = (e) => {
    const { name, value } = e.target;
    setVal((obj) => {
      return {
        ...obj,
        [name]: value,
      };
    });
  };
  const submitFun = async (e) => {
    e.preventDefault();
    const { name, email, number, password } = val;
    if (name && email && number && password) {
      let result = await fetch("https://your-story-tct9.onrender.com/signup", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, number, password }),
      });
      result = await result.json();
      if (result) {
        document.getElementById("loginMainId").style.display = "none";
        document.getElementById("signupMainId").style.display = "none";
        localStorage.setItem("user", JSON.stringify(result));
        navigater("/");
        // console.log(result);
      }
    } else if (email && password) {
      let loginData = await fetch(
        "https://your-story-tct9.onrender.com/login",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      loginData = await loginData.json();
      if (loginData) {
        document.getElementById("loginMainId").style.display = "none";
        document.getElementById("signupMainId").style.display = "none";
        localStorage.setItem("user", JSON.stringify(loginData));
        // console.log(loginData);
        navigater("/");
      }
    } else {
      alert("data not found");
    }
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
          <div className="secnavMain" id="secnavMainId">
            <ul>
              <li>
                <Link to="/" onClick={navclearIconFun}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Books" onClick={navclearIconFun}>
                  Books
                </Link>
              </li>
              <li>
                <Link to="/Stories" onClick={navclearIconFun}>
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={navclearIconFun}>
                  About
                </Link>
              </li>
            </ul>

            <div className="dashbord">
              <Link to="/addstory" onClick={navclearIconFun}>
                Add Story
              </Link>
              <div className="popupDivMain">
                <ArrowDropDownCircleIcon
                  id="popDown"
                  onClick={() => {
                    document.getElementById("popupId").style.display = "flex";
                    document.getElementById("popDown").style.display = "none";
                    document.getElementById("popOpen").style.display = "block";
                  }}
                />
                <KeyboardDoubleArrowUpIcon
                  id="popOpen"
                  onClick={() => {
                    document.getElementById("popupId").style.display = "none";
                    document.getElementById("popDown").style.display = "block";
                    document.getElementById("popOpen").style.display = "none";
                  }}
                />
                <div className="popUp" id="popupId">
                  <Link
                    to="/profile"
                    onClick={() => {
                      document.getElementById("popupId").style.display = "none";
                      document.getElementById("popDown").style.display =
                        "block";
                      document.getElementById("popOpen").style.display = "none";

                      document.getElementById("navclearIconId").style.display =
                        "none";
                      document.getElementById("navsideIconId").style.display =
                        "block";
                      document.getElementById("secnavMainId").style.display =
                        "none";
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      localStorage.clear("user");
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <DensityMediumIcon
            className="navsideIcon"
            id="navsideIconId"
            onClick={navsideIconFun}
          />
          <ClearIcon
            className="navclearIcon"
            id="navclearIconId"
            onClick={navclearIconFun}
          />
        </div>
      ) : (
        <div className="navMain">
          <div className="logo">
            <Link to="/" className="siteNamelink">
              <p className="siteName">Your Story</p>
            </Link>
          </div>
          <div className="secnavMain" id="secnavMainId">
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
                  document.getElementById("loginMainId").style.display =
                    "block";
                }}
              >
                LogIn / SignUp
              </p>
            </div>
          </div>
          <DensityMediumIcon
            className="navsideIcon"
            id="navsideIconId"
            onClick={navsideIconFun}
          />
          <ClearIcon
            className="navclearIcon"
            id="navclearIconId"
            onClick={navclearIconFun}
          />
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
            required
          />
          <input
            type="password"
            name="password"
            onChange={changeFun}
            placeholder="Enter Your Password "
            required
          />
          <div className="checkBokDiv">
            <input type="checkbox" name="iagree" id="checkBoklogin" required />
            <label htmlFor="iagree">
              I agree to the terms of use and have read and understand the
              privacy policy
            </label>
          </div>
          <div className="otherOption">
            <p>Don't have an account?</p>
            <h3
              onClick={() => {
                document.getElementById("loginMainId").style.display = "none";
                document.getElementById("signupMainId").style.display = "block";
              }}
            >
              signup
            </h3>
          </div>

          <button>Login</button>
        </form>
      </div>

      {/* signup */}
      <div className="loginMain" id="signupMainId">
        <form onSubmit={submitFun} className="loginForm">
          <p
            onClick={() => {
              document.getElementById("signupMainId").style.display = "none";
            }}
            className="crose"
          >
            x
          </p>
          <h1>Create your account</h1>

          <input
            type="text"
            name="name"
            onChange={changeFun}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="number"
            name="number"
            onChange={changeFun}
            placeholder="Enter Your Number"
            required
          />
          <input
            type="email"
            name="email"
            onChange={changeFun}
            placeholder="Enter Your Email Adderss"
            required
          />
          <input
            type="password"
            name="password"
            onChange={changeFun}
            placeholder="Enter Your Password "
            required
          />
          <div className="checkBokDiv">
            <input type="checkbox" name="iagree" id="checkBokSignup" required />
            <label htmlFor="iagree">
              I agree to the terms of use and have read and understand the
              privacy policy
            </label>
          </div>
          <div className="otherOption">
            <p>Don't have an account?</p>
            <h3
              onClick={() => {
                document.getElementById("signupMainId").style.display = "none";
                document.getElementById("loginMainId").style.display = "block";
              }}
            >
              Login
            </h3>
          </div>

          <button>Signup</button>
        </form>
      </div>
    </>
  );
};

export default Nav;
