import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      let result = await fetch("https://your-story-tct9.onrender.com/stories", {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      result = await result.json();
      setData(result);
    }
    getData();
  });
  return (
    <div className="storiesMain">
      {data &&
        data.map((value) => {
          return (
            <div className="stories" key={value._id}>
              <img
                src={value.thumbnail}
                alt="storiesthum"
                className="storiesImg"
              />
              <div className="storiesinnerDiv">
                <h1>{value.title}</h1>
                <p className="storyDescription">{value.description}</p>
                <Link to={"/Stories/" + value._id} className="storiesBtn">
                  Read Story
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Stories;
