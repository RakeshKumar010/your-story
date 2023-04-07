import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteLoader from "./DeleteLoader";

const Profile = () => {
  const [deleteLoading, setdeleteLoading] = useState(false);

  const [localData, setLocalData] = useState();
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  async function getFun() {
    let auth = localStorage.getItem("user");
    auth = JSON.parse(auth);
    if (auth) {
      let result = await fetch(
        `https://your-story-tct9.onrender.com/profile/${auth._id}`
      );
      if (result) {
        setisLoading(false);

        result = await result.json();
        setLocalData(auth.name);
        setData(result);
      }
    } else {
      auth = "";
    }
  }
  useEffect(() => {
    getFun();
  }, []);

  const deleteFun = async (key) => {
    setdeleteLoading(true);
    setTimeout(() => {
      setdeleteLoading(false);
    }, 6000);

    await fetch(`https://your-story-tct9.onrender.com/${key}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    });

    getFun();
  };
  return deleteLoading ? (
    <DeleteLoader />
  ) : (
    <>
      <div className="p-top2">
        <h1 className="publishedName">Published by {localData}</h1>

        <div className="storiesMain" id="profileMain">
          <SkeletonTheme highlightColor="rgb(44, 184, 210)">
            {isLoading ? (
              <>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories" id="profileId">
                  <Skeleton />
                  <div className="storiesinnerDiv">
                    <h1>
                      <Skeleton />
                    </h1>
                    <p className="storyDescription">
                      <Skeleton />
                    </p>
                    <div className="profileBtn">
                      <Link className="storiesBtn">
                        <Skeleton />
                      </Link>
                      <div className="profileinnerBtn">
                        <DeleteForeverIcon />
                        <Link className="updateIcon">
                          <EditRoadIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              data &&
              data.map((value) => {
                return (
                  <div className="stories" key={value._id} id="profileId">
                    <img
                      src={value.thumbnail}
                      alt="storiesthum"
                      className="storiesImg"
                    />
                    <div className="storiesinnerDiv">
                      <h1>{value.title}</h1>
                      <p className="storyDescription">{value.description}</p>
                      <div className="profileBtn">
                        <Link
                          to={"/Stories/" + value._id}
                          className="storiesBtn"
                        >
                          Read Story
                        </Link>
                        <div className="profileinnerBtn">
                          <Link
                            onClick={() => {
                              deleteFun(value._id);
                            }}
                            className="updateIcon"
                          >
                            <DeleteForeverIcon />
                          </Link>
                          <Link
                            to={"/updatestory/" + value._id}
                            className="updateIcon"
                          >
                            <EditRoadIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
};

export default Profile;
