import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullStory = () => {
  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const params = useParams();
  useEffect(() => {
    async function getFun() {
      let data = await fetch(
        `https://your-story-tct9.onrender.com/stories/${params.id}`
      );
      data = await data.json();
      setThumbnail(data.thumbnail);
      setTitle(data.title);
      setDescription(data.description);
      console.log(data);
    }
    getFun();
  }, [params.id]);
  return (
    <div className="fullStorycontainer p-top">
      <div className="stories">
        <img src={thumbnail} alt="storiesthum" className="storiesImg" />
        <div className="storiesinnerDiv">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FullStory;
