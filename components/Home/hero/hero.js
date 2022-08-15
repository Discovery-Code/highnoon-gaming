import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroContainer, HeroCountdownBox } from "./heroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-image">
        <Image
          src="/imgs/hero-bg.jpg"
          className="image-custom"
          layout="fill"
          alt=""
        />
      </div>

      <div className="hero-shade"></div>

      {/* HERO */}
      <HeroCountdownBox>
        {/* countdown info */}
        <div className="countdown-info">
          <span className="game-title">Street Fighter V</span>
          <p>
            This sunday <span>27th August</span> at{" "}
            <span>Aeon Bar & Grill, Sheraton Mall.</span>
          </p>
        </div>

        {/* countdown link */}
        <div className="countdown-link">
          <svg
            width="129"
            height="119"
            viewBox="0 0 129 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H101.633L128.917 59.5L101.633 119H0L26.5947 59.5L0 0Z"
              fill="#DD163B"
            />
          </svg>
          <svg
            width="129"
            height="119"
            viewBox="0 0 129 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H101.633L128.917 59.5L101.633 119H0L26.5947 59.5L0 0Z"
              fill="#DD163B"
            />
          </svg>
          <svg
            width="129"
            height="119"
            viewBox="0 0 129 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H101.633L128.917 59.5L101.633 119H0L26.5947 59.5L0 0Z"
              fill="#DD163B"
            />
          </svg>
          <svg
            width="129"
            height="119"
            viewBox="0 0 129 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H101.633L128.917 59.5L101.633 119H0L26.5947 59.5L0 0Z"
              fill="#DD163B"
            />
          </svg>

          <Link href="/events">
            <button className="event-link--button">check out next event</button>
          </Link>
        </div>

        {/* countdown timer */}
        <div className="countdown-timer">
          <div className="timer-container">
            <div className="timer-box days">00</div>
            <p>days</p>
          </div>
          <div className="timer-container">
            <div className="timer-box hours">00</div>
            <p>hours</p>
          </div>
          <div className="timer-container">
            <div className="timer-box minutes">00</div>
            <p>minutes</p>
          </div>
          <div className="timer-container">
            <div className="timer-box seconds">00</div>
            <p>seconds</p>
          </div>
        </div>
      </HeroCountdownBox>
    </HeroContainer>
  );
};

export default Hero;
