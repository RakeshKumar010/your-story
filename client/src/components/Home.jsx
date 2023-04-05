import React from "react";
import { Link } from "react-router-dom";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.jpg";
import asset3 from "../assets/asset3.jpg";
import asset4 from "../assets/asset4.jpeg";
import asset5 from "../assets/asset5.jpg";
const Home = () => {
  return (
    <>
      <div className="homeMain">
        <div className="div1">
          <div className="weare">
            <p>We're So Excited...</p>
            <h1>To Listen Your Story!</h1>
            <div className="btnHome">
              <Link to="/Stories" className="readtopstories">
                Read Top Stories
              </Link>
              <Link to="/About" className="whoareyou">
                who are you?
              </Link>
            </div>
          </div>
        </div>
        <div className="div2">
          <img src={asset1} alt="homepage" />
        </div>
      </div>
      <div className="homeContainer">
        <div id="homeContainerdiv1">
          <Link to="/childstory">
            <p className="topStories imagePara">Child Stories</p>
            <img src={asset2} alt="topStories" />
          </Link>
        </div>
        <div className="homeContainerdiv2">
          <Link to="/motivationalstory">
            <p className="topmotivation imagePara">Motivational Stories</p>
            <img src={asset3} alt="topStories" />
          </Link>
        </div>
        <div className="homeContainerdiv3">
          <p className="funnystories imagePara">Funny Stories</p>
          <img src={asset4} alt="topStories" />
        </div>
        <div className="homeContainerdiv4">
          <Link to="/randomstory">
            <p className="random imagePara">Random Stories</p>
            <img src={asset5} alt="topStories" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
