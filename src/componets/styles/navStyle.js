import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  height: 55px;
  display: flex;
  align-items: center;

  & > div {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Background = styled.section`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: 300ms 100ms;
  z-index: 2;
`;

export const Logo = styled.div`
  width: 120px;
  height: 30px;
`;

export const MiddleNav = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-weight: 600;
  }

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const RightNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 2;

  a {
    font-weight: 600;
  }

  & > div {
    display: none;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (min-width: 1200px) {
      display: flex;
    }
  }

  & > button {
    z-index: 3;
  }
`;

export const MobileNav = styled.ul`
  padding: 2rem;
  width: 300px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(300px)")};
  transition: 300ms;
  z-index: 3;
  overflow-y: scroll;

  & > button {
    align-self: flex-end;
    background: none;
  }

  a {
    font-weight: 600;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @media (min-width: 1200px) {
      display: none;
    }
  }
`;
