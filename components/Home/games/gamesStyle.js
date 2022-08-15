import styled from "styled-components";
import { grey, red, white } from "../../ui/colors";

const GamesContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  background-color: ${red};

  .carousel-container {
    position: absolute;
    height: 70%;
    width: 70%;
    /* border: 2px solid deepskyblue; */
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;

    & :is(ul) {
      /* position: absolute; */
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 20px;

      li {
        position: relative;
        height: 100%;
        min-width: calc(100% / 4 - 19px);

        .game-image {
          position: relative;
          height: 80%;
          width: 100%;
          background-color: ${grey};
        }

        .systems {
          position: relative;
          height: 20%;
          width: 100%;
          background-color: ${white};
        }
      }
    }
  }

  .carousel-slider--container {
    /* border: 2px solid deepskyblue; */
    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #cSlider {
      -webkit-appearance: none;
      width: 500px;
      height: 20px;
      outline: none;
      background: none;
      border: 2px solid ${grey};

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 30px;
        background: ${red};
        box-shadow: 0 0 6px ${grey};
        cursor: pointer;
      }
    }
  }
`;

export { GamesContainer };
