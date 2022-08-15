import styled from "styled-components";
import { opacRed25, opacRed60, red, grey, opacGrey40 } from "../../ui/colors";

const ContactContainer = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;

  .hg-logo {
    position: absolute;
    top: -70px;
    left: -200px;
    transform: rotate(-35deg);
    color: ${opacRed25};
    font-size: 40em;
  }

  .contact-heading {
    position: relative;
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2em;
    }

    span {
      color: ${red};
    }
  }
`;

const Form = styled.form`
  position: relative;
  height: 70%;
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;

  & :is(div) {
    position: relative;
    height: 48px;
    width: 1000px;
   
  }

  input,
  textarea {
    height: 100%;
    border: 4px solid ${opacRed60};
    background: ${grey};
    outline: none;
    font-family: "Revalia", cursive;
    box-shadow: 4px 6px 6px ${opacGrey40};

    &::placeholder {
      position: relative;
      font-size: 1.1em;
      left: 10px;
    }
  }

  .name-inputs {
    display: flex;

    input[type="text"] {
      position: absolute;
      width: 490px;

      &:nth-child(2) {
        right: 0;
      }
    }
  }

  .email-input {
    top: 10px;

    input[type="email"] {
      height: 100%;
      width: 100%;
    }
  }

  textarea {
    position: relative;
    top: 20px;
    width: 1000px;
    height: 200px;
  }

  .submit-input {
    top: 30px;

    input[type="submit"] {
      width: 150px;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
`;

export { ContactContainer, Form };
