import React, { useEffect, useState } from "react";
import LiveAdStory from "./LiveAdStory";
import AddStoryLoader from "./AddStoryLoader";

const AdStory = () => {
  const [data, setData] = useState("");
  const [userid, setUserid] = useState("");
  const [addstoryLoader, setaddstoryLoader] = useState(false);
  useEffect(() => {
    function getUserIdFun() {
      let auth = localStorage.getItem("user");
      auth = JSON.parse(auth);
      setUserid(auth._id);
    }
    getUserIdFun();
  });
  const [val, setVal] = useState({
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
    setaddstoryLoader(true);
    setTimeout(() => {
      setaddstoryLoader(false);
    }, [4000]);
    e.preventDefault();
    await fetch("https://your-story-tct9.onrender.com/addstory", {
      method: "post",
      body: JSON.stringify({ ...val, userid }),
      headers: { "content-type": "application/json" },
    });
    getData(val.title);
  };
  return (
    <>
      {addstoryLoader ? (
        <AddStoryLoader />
      ) : (
        <div className="adstoryMain p-top2">
          <form onSubmit={submitFun} className="formClass">
            <h1 className="formh1Class">Share Your Story,Today!</h1>
            <input type="text" name="userid" value={userid} hidden />
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
              name="type"
              onChange={changeFun}
              placeholder="Enter the type"
            />
            <textarea
              type="text"
              name="description"
              onChange={changeFun}
              placeholder="Enter the story....."
            />
            <button>Add</button>
          </form>
          <div className="liveMain">
            <LiveAdStory liveData={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default AdStory;
