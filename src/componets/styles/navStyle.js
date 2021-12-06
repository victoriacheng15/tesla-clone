import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 2.5%;
  width: min(95%, var(--max-width));
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 120px;
  height: 30px;
`;

export const Ulgroup = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 900px) {
    display: flex;
  }
`;
