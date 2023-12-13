import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  background: green;
  color: white;
  padding: 10px 20px;

  &:hover {
    background: lightgreen;
  }
`;

const StyledErrorButton = styled(StyledButton)`
  background: red;
`;

const StyledLink = styled(Link)`
  fontsize: 2rem;
  color: lightcoral;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  background: var(--primary-background);
`;

export default function HomePage() {
  return (
    <>
      <h1>Styled Components</h1>
      <StyledFlexContainer>
        <StyledButton
          type="button"
          onClick={() => {
            console.log("Lol");
          }}
        >
          Brokkoli
        </StyledButton>
        <StyledErrorButton>Error Button</StyledErrorButton>
        <StyledLink href="/">Hallo</StyledLink>
      </StyledFlexContainer>
    </>
  );
}
