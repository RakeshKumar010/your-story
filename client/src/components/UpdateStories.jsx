import React, { useEffect, useState } from "react";
import LiveAdStory from "./LiveAdStory";
import { useParams } from "react-router-dom";

const UpdateStories = () => {
  const [data, setData] = useState("");
  const [userid, setUserid] = useState("");
  const params = useParams();

  const [title, setUpdateTitle] = useState();
  const [thumbnail, setUpdateThumbnail] = useState();
  const [description, setUpdateDescription] = useState();
  const [type, setUpdateType] = useState();

  useEffect(() => {
    async function getUserIdFun() {
      let auth = localStorage.getItem("user");
      auth = JSON.parse(auth);
      setUserid(auth._id);

      let result = await fetch(
        `https://your-story-tct9.onrender.com/updatestory/${params.id}`
      );
      result = await result.json();

      setUpdateTitle(result.title);
      setUpdateThumbnail(result.thumbnail);
      setUpdateDescription(result.description);
      setUpdateType(result.type);
    }
    getUserIdFun();
  }, [params.id]);

  async function getData(title) {
    let result = await fetch(
      `https://your-story-tct9.onrender.com/addstory/${title}`,
      {
        method: "get",
        headers: { "content-type": "application/json" },
      }
    );
    result = await result.json();
    console.log(result);

    setData(result);
  }

  const titlechangeFun = (e) => {
    setUpdateTitle(e.target.value);
  };
  const thumbnailchangeFun = (e) => {
    setUpdateThumbnail(e.target.value);
  };
  const typechangeFun = (e) => {
    setUpdateType(e.target.value);
  };
  const descriptionchangeFun = (e) => {
    setUpdateDescription(e.target.value);
  };
  const submitFun = async (e) => {
    e.preventDefault();

    let result = await fetch(
      `https://your-story-tct9.onrender.com/updatestory/${params.id}`,
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title,
          thumbnail,
          description,
          type,
          userid,
        }),
      }
    );
    result = await result.json();
    if (result) {
      console.log("sucesfully");
    }
    getData(title);
  };
  return (
    <>
      <div className="adstoryMain p-top2">
        <form onSubmit={submitFun} className="formClass">
          <h1>Share Your Story,Today!</h1>
          <p>{title}</p>
          <input type="text" name="userid" value={userid} hidden />
          <input
            type="text"
            name="title"
            onChange={titlechangeFun}
            placeholder="Enter the title"
            value={title}
          />
          <input
            type="text"
            name="thumbnail"
            onChange={thumbnailchangeFun}
            placeholder="Enter the thumbnail"
            value={thumbnail}
          />

          <input
            type="text"
            name="type"
            onChange={typechangeFun}
            placeholder="Enter the type"
            value={type}
          />
          <textarea
            type="text"
            name="description"
            onChange={descriptionchangeFun}
            placeholder="Enter the story....."
            value={description}
          />
          <button>Add</button>
        </form>
        <div className="liveMain">
          <LiveAdStory liveData={data} />
        </div>
      </div>
    </>
  );
};

export default UpdateStories;
