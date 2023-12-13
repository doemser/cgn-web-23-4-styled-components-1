import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  ${({ variant }) => {
    if (variant === "outlined") {
      return css`
        border: 1px solid black;
        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.8);
        }
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "contained") {
      return css`
        background: black;
        color: white;
        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `;
    }
  }}
`;

export default Button;
