import React, { useEffect, useState } from "react";
import LiveAdStory from "./LiveAdStory";

const AdStory = () => {
  const [data, setData] = useState("");
  const [userid, setUserid] = useState("");
  useEffect(() => {
    function getUserIdFun() {
      let auth = localStorage.getItem("user");
      auth = JSON.parse(auth);
      setUserid(auth._id);
    }
    getUserIdFun();
  });
  const [val, setVal] = useState({
    userid: "",
    title: "",
    thumbnail: "",
    description: "",
    type: "",
  });

  //liveadstory

  async function getData(title) {
    let result = await fetch(
      `https://your-story-tct9.onrender.com/addstory/${title}`,
      {
        method: "get",
        headers: { "content-type": "application/json" },
      }
    );
    result = await result.json();
    setData(result);
  }

  const changeFun = (e) => {
    const { value, name } = e.target;
    setVal((obj) => {
      return {
        ...obj,
        [name]: value,
      };
    });
  };
  const submitFun = async (e) => {
    e.preventDefault();
    let result = await fetch("https://your-story-tct9.onrender.com/addstory", {
      method: "post",
      body: JSON.stringify({ ...val }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    getData(val.title);
  };
  return (
    <>
      <div className="adstoryMain">
        <form onSubmit={submitFun} className="formClass">
          <h1>Share Your Story,Today!</h1>
          <input
            type="text"
            name="userid"
            onChange={changeFun}
            value={userid}
          />
          <input
            type="text"
            name="title"
            onChange={changeFun}
            placeholder="Enter the title"
          />
          <input
            type="text"
            name="thumbnail"
            onChange={changeFun}
            placeholder="Enter the thumbnail"
          />
          <input
            type="text"
            name="description"
            onChange={changeFun}
            placeholder="Enter the description"
          />
          <input
            type="text"
            name="type"
            onChange={changeFun}
            placeholder="Enter the type"
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

export default AdStory;
