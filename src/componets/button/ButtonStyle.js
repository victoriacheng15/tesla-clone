import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 30px;
  background: ${({ theme: { buttons } }) => buttons.menuButton};
  letter-spacing: 1px;
  cursor: pointer;
`;
