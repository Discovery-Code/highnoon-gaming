import styled from "styled-components";
import { red, opacGrey40 } from "../ui/colors";

const HeaderContainer = styled.div`
  position: absolute;
  height: 3.5rem;
  width: 100%;
  /* border: 1px solid ${red}; */
  z-index: 100;

  display: flex;
  flex-flow: row;

  div {
    position: absolute;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .header-logo {
    left: 15px;
  }

  .header-nav--links {
    left: 25%;
  }

  .header-login-register {
    right: 35px;

    .register-button {
      width: 90px;
    }
  }

  span {
    font-size: 1.8em;
    color: ${red};
    text-shadow: 3px 3px 3px ${opacGrey40};
  }

  ul {
    display: flex;

    li {
      padding: 0 20px;
      display: flex;
      flex-flow: column;
      align-items: center;

      .active {
        position: relative;
        top: 4px;
        height: 6px;
        width: 6px;
        transform: rotate(45deg);
        background: ${red};
      }
    }
  }
`;

export { HeaderContainer };
