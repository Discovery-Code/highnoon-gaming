import styled from "styled-components";
import { grey, opacblack50, red, white } from "../../ui/colors";

const SocialsContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 254px;
  width: 893px;
  box-shadow: 4px 4px 8px ${opacblack50};
  display: flex;
  z-index: 100;

  .socials-container--left {
    position: relative;
    width: 40%;
    height: 100%;
  }

  .socials-container--right {
    position: relative;
    width: 60%;
    height: 100%;
    background: ${red};

    display: flex;
    flex-flow: column;

    div {
      position: relative;
      height: calc(100% / 3);
      width: 100%;
      display: flex;
    }

    .socials-header {
      justify-content: center;
      align-items: center;

      .socials-heading {
        font-size: 1.8em;
        color: ${grey};
      }
    }

    .socials-text {
      justify-content: center;

      .socials-text-margin {
        width: 86%;
        text-align: left;
        letter-spacing: 0.8px;
        font-size: 1.1em;
      }
    }

    .socials-icons {
      justify-content: center;
      align-items: center;

      .socials-align {
        position: absolute;
        bottom: 0;
        width: auto;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          transition: 400ms all ease-in-out;
          cursor: pointer;
          margin: 0 10px;
          fill: ${grey};

          &:hover {
            fill: ${white};
          }
        }
      }
    }
  }
`;

export { SocialsContainer };
