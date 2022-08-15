import styled from "styled-components";
import {
  opacblack25,
  opacblack40,
  opacblack50,
  opacGrey55,
  opacGrey75,
  red,
} from "../../ui/colors";

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  .hero-image {
    position: absolute;
    height: 100%;
    width: 100%;

    .image-custom {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .hero-shade {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: ${opacGrey75};
  }
`;

const HeroCountdownBox = styled.div`
  position: absolute;
  top: 18%;
  left: 10%;
  height: 60%;
  width: 45%;
  /* border: 1px solid red; */

  .countdown-info,
  .countdown-link,
  .countdown-timer {
    position: relative;
    height: calc(100% / 3);
    width: 100%;
    /* border: 1px solid blue; */
  }

  .countdown-info {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    .game-title {
      position: relative;
      left: 1%;
      font-size: 2em;
      text-transform: uppercase;
    }

    p {
      position: relative;
      left: 1%;
      font-size: 1.5em;

      span {
        color: ${red};
      }
    }
  }

  .countdown-link {
    display: flex;

    svg {
      position: relative;
      left: 2%;
      top: 15%;
      margin: 0 -8px;
    }

    .event-link--button {
      position: relative;
      top: 15%;
      height: 120px;
      width: 120px;
      border-radius: 50%;
      margin-left: 10%;
      border: 1px solid ${opacblack50};
      background: ${opacGrey55};
      box-shadow: 0 0 6px ${opacblack25};

      text-transform: uppercase;
    }
  }

  .countdown-timer {
    display: flex;
    align-items: center;

    .timer-container {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .timer-box {
      position: relative;
      height: 94px;
      width: 112px;
      background: ${opacblack40};
      border-radius: 5px;
      box-shadow: 8px 4px 6px ${opacblack25};
      margin: 0 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4em;
    }

    p {
      padding: 10px 0;
    }
  }
`;

export { HeroContainer, HeroCountdownBox };
