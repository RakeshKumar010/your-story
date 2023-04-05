import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Top = () => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={gotoTop} className="topMain">
      <ArrowUpwardIcon />
    </div>
  );
};

export default Top;
