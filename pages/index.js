import styled, { css } from "styled-components";
import Button from "@/components/Button";

const StyledFlexContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => (typeof $gap === "number" ? $gap : 100)}px;
  background: var(--primary-background);
`;

export default function HomePage() {
  return (
    <>
      <h1>Styled Components</h1>
      <StyledFlexContainer $direction="row" $gap={20}>
        <Button>Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </StyledFlexContainer>
    </>
  );
}
