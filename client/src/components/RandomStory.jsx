import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomStory = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      let result = await fetch("http://localhost:5000/randomstory/story", {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      result = await result.json();
      setData(result);
    }
    getData();
  });
  return (
    <>
      <h1 className="publishedName">Random Story</h1>

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
    </>
  );
};

export default RandomStory;

// export default RandomStory
