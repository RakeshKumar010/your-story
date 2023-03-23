import React, { useState } from "react";
import LiveAdStory from "./LiveAdStory";

const AdStory = () => {
  const [data, setData] = useState("");

  const [val, setVal] = useState({
    title: "",
    thumbnail: "",
    description: "",
    type: "",
  });

  //liveadstory

  async function getData(title) {
    let result = await fetch(`http://localhost:5000/addstory/${title}`, {
      method: "get",
      headers: { "content-type": "application/json" },
    });
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
    let result = await fetch("http://localhost:5000/addstory", {
      method: "post",
      body: JSON.stringify({ ...val }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    getData(val.title);
  };
  return (
    <>
      <div className="adstoryMain">
        <form onSubmit={submitFun} className="formClass">
          <h1>Share Your Story,Today!</h1>

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
