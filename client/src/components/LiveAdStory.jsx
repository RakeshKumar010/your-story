import React, { useState } from "react";

const LiveAdStory = ({ liveData }) => {
  return (
    <>
      <>
        <h1>Live Preview</h1>

        <img src={liveData.thumbnail} alt="thum" className="thumbnail" />
        <h2>{liveData.title}</h2>
        <p>{liveData.description}</p>
      </>
    </>
  );
};

export default LiveAdStory;
