import React from "react";
import "./Hero.css";
import play_icon from "../../Assets/play_icon.png";
import pause_icon from "../../Assets/pause_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-right">
        <div className="hero-text">
          <h1> STEEZE</h1>
          <p>by FAHAD....</p>
        </div>

        <div className="hero-choices">
          <a href="#">
            <span></span>
            <li>VANS</li>
          </a>
          <a href="#">
            <span></span>
            <li>NIKE</li>
          </a>
        </div>
      </div>

      <div className="hero-left">
        <div className="hero-text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot yellow" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot yellow" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot yellow" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
