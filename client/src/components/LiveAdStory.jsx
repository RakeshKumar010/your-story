import React, { useState } from "react";

const LiveAdStory = ({ liveData }) => {
  const [title, setTitle] = useState("Title of the Story");
  const [description, setDescription] = useState("Description of the story");
  const [thumbnail, setThumbnail] = useState(
    "https://p.kindpng.com/picc/s/195-1951310_your-logo-here-png-monochrome-transparent-png.png"
  );

  const previewFun = () => {
    setTitle(liveData.title);
    setDescription(liveData.description);
    setThumbnail(liveData.thumbnail);
  };

  return (
    <>
      <>
        <button onClick={previewFun} className='previewBtn'>Preview</button>
        <h1>Live Preview</h1>

        <img src={thumbnail} alt="thum" className="thumbnail" />
        <h2>{title}</h2>
        <p>{description}</p>
      </>
    </>
  );
};

export default LiveAdStory;
