import React from "react";
import "./Background.css";
import video1 from "../../Assets/Vans Off The Wall I Vans Shoes Commercial 2020 I Sony Alpha 7III.mp4";
import image1 from "../../Assets/harrison-kugler-BKIfA1YrbUc-unsplash.jpg";
import image2 from "../../Assets/harrison-kugler-LbKGj2txjlk-unsplash.jpg";
import image3 from "../../Assets/rhendi-rukmana-PKkDEFXU3kI-unsplash.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background" alt="" />;
  }
};

export default Background;
