import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditRoadIcon from "@mui/icons-material/EditRoad";
const Profile = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getFun() {
      let auth = localStorage.getItem("user");
      auth = JSON.parse(auth);
      let result = await fetch(`http://localhost:5000/profile/${auth._id}`);
      result = await result.json();

      setData(result);
    }
    getFun();
  });

  const deleteFun = async (key) => {
    const result = await fetch(`http://localhost:5000/${key}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    });
  };
  return (
    <div className="storiesMain" id="profileMain">
      {data &&
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
                  <Link to={"/Stories/" + value._id} className="storiesBtn">
                    Read Story
                  </Link>
                  <div className="profileinnerBtn">
                    <DeleteForeverIcon
                      onClick={() => {
                        deleteFun(value._id);
                      }}
                    />
                    <Link to={"/updatestory/" + value._id}>
                      <EditRoadIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profile;
