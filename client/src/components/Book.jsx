import React from "react";
import richDad from "../assets/richDad.jpg";
import thinkandgrowrich from "../assets/thinkandgrowrich.jpg";
import the7habit from "../assets/the7habit.jpg";
import howtowin from "../assets/howtowin.jpg";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div className="richDadMain p-top2">
        <div className="contaner">
          <img src={richDad} alt="richDad" className="containerImg" />
          <div className="richdadinnerDiv">
            <h1>Rich Dad Poor Dad</h1>
            <p>
              What the Rich Teach Their Kids About Money That the Poor and
              Middle Class Do Not!
            </p>
            <Link
              to="https://drive.google.com/file/d/0B7OmNithn8yCZ2RVeTRYT1Y2LVk/view?resourcekey=0-p-IGst0nAVCPKZNAgwHTjg"
              target={"_blank"}
              className="bookReadBtn"
            >
              Read Book
            </Link>
          </div>
        </div>
        <div className="contaner">
          <img src={thinkandgrowrich} alt="richDad" className="containerImg" />
          <div className="richdadinnerDiv">
            <h1>Think and Grow Rich</h1>
            <p>
              Think and Grow Rich, published in 1937, Hill draws on stories of
              Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires
              of his generation to illustrate his principles
            </p>
            <Link
              to={
                "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf"
              }
              target={"_blank"}
              className="bookReadBtn"
            >
              Read Book
            </Link>
          </div>
        </div>
        <div className="contaner">
          <img src={the7habit} alt="richDad" className="containerImg" />
          <div className="richdadinnerDiv">
            <h1>The 7 Habits of Highly Effective People</h1>
            <p>
              One of the most compelling books ever written, The 7 Habits of
              Highly Effective People, has empowered and inspired readers for
              over 25 years.
            </p>
            <Link
              to={"https://ati.dae.gov.in/ati12052021_1.pdf"}
              target={"_blank"}
              className="bookReadBtn"
            >
              Read Book
            </Link>
          </div>
        </div>
        <div className="contaner">
          <img src={howtowin} alt="richDad" className="containerImg" />
          <div className="richdadinnerDiv">
            <h1>How to Win Friends and Influence People</h1>
            <p>
              How to Win Friends and Influence People by bestselling author Dale
              Carnegie gives you time-tested advice and simple techniques on how
              to deal with people, understand them and get along with them
            </p>
            <Link
              to={
                "https://images.kw.com/docs/2/1/2/212345/1285134779158_htwfaip.pdf"
              }
              target={"_blank"}
              className="bookReadBtn"
            >
              Read Book
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
