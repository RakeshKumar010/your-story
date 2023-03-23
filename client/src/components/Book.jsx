import React from "react";
import richDad from "../assets/richDad.jpg";
import thinkandgrowrich from "../assets/thinkandgrowrich.jpg";
import the7habit from "../assets/the7habit.jpg";
import howtowin from "../assets/howtowin.jpg";
const Book = () => {
  return (
    <>
      <div className="richDadMain">
        <div className="contaner">
          <img src={richDad} alt="richDad" className="containerImg" />
          <div className="richdadinnerDiv">
            <h1>Rich Dad Poor Dad</h1>
            <p>
              What the Rich Teach Their Kids About Money That the Poor and
              Middle Class Do Not!
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
