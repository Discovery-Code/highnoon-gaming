import styled from "styled-components";
import { opacblack50, opacRed90, red} from "../../ui/colors";

const LatestNewsContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const NewsContainer = styled.div`
  position: absolute;
  top: 70%;
  transform: translateY(-70%);
  height: 70%;
  width: 70%;
  /* border: 2px solid ${opacRed90}; */

  .latest-news--heading {
    position: relative;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & :is(p) {
      text-transform: uppercase;
      font-size: 2em;
      letter-spacing: 10px;
      color: ${red};
    }
  }

  .news-grid {
    position: relative;
    height: 80%;
    width: 100%;

    display: grid;
    grid-gap: 6px;
    grid-template-columns: 35% 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

    .grid-box {
      position: relative;
      box-shadow: 6px 6px 6px ${opacblack50};

      & :is(.image) {
        object-fit: cover;
      }
    }

    .grid-box-1 {
      grid-column: 1;
      grid-row: 1 / 5;

      & :is(div) {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 120px;
        background-color: ${opacRed90};
      }
    }

    .grid-box-2 {
      grid-column: 2 / 5;
      grid-row: 1 / 3;
    }

    .grid-box-3 {
      grid-column: 5 / 7;
      grid-row: 1 / 3;
    }

    .grid-box-4 {
      grid-column: 2 / 4;
      grid-row: 3 / 5;
    }

    .grid-box-5 {
      grid-column: 4 / 7;
      grid-row: 3 / 5;
    }
  }
`;

export { LatestNewsContainer, NewsContainer };
