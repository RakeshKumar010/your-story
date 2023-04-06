import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      let result = await fetch("https://your-story-tct9.onrender.com/stories", {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      if (result) {
        setisLoading(false);
        result = await result.json();
        setData(result);
      }
    }
    getData();
  }, []);
  return (
    <div className="storiesMain p-top">
      <SkeletonTheme highlightColor="rgb(44, 184, 210)">
        {isLoading ? (
          <>
            <div className="stories">
              <Skeleton className="storiesImg" />
              <div className="storiesinnerDiv">
                <h1>
                  <Skeleton />
                </h1>
                <p className="storyDescription">
                  <Skeleton />
                </p>
                <Link className="storiesBtn">
                  <Skeleton />
                </Link>
              </div>
            </div>
            <div className="stories">
              <Skeleton className="storiesImg" />
              <div className="storiesinnerDiv">
                <h1>
                  <Skeleton />
                </h1>
                <p className="storyDescription">
                  <Skeleton />
                </p>
                <Link className="storiesBtn">
                  <Skeleton />
                </Link>
              </div>
            </div>
            <div className="stories">
              <Skeleton className="storiesImg" />
              <div className="storiesinnerDiv">
                <h1>
                  <Skeleton />
                </h1>
                <p className="storyDescription">
                  <Skeleton />
                </p>
                <Link className="storiesBtn">
                  <Skeleton />
                </Link>
              </div>
            </div>
            <div className="stories">
              <Skeleton className="storiesImg" />
              <div className="storiesinnerDiv">
                <h1>
                  <Skeleton />
                </h1>
                <p className="storyDescription">
                  <Skeleton />
                </p>
                <Link className="storiesBtn">
                  <Skeleton />
                </Link>
              </div>
            </div>
          </>
        ) : (
          data &&
          data.map((value, index) => {
            return (
              <>
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
              </>
            );
          })
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Stories;
