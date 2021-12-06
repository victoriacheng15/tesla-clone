import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0 1.5rem 0;
  background-image: ${({ bgImage }) => `url(/assets/${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: -1;

  :not(:first-child) {
    padding-bottom: 4rem;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: capitalize;
  }

  & > div:last-child {
    width: 90%;
  }

  p {
    font-size: 0.875rem;
    text-align: center;

    a {
      margin-left: 0.25rem;
      position: relative;
      box-shadow: 0 1px 0 var(--clr-font);
      transition: 300ms;

      &:hover {
        box-shadow: 0 3px 0 var(--clr-font);
      }
    }
  }
`;

export const ButtonsGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const LeftBtn = styled.button`
  padding: 0.5rem 1.5rem;
  max-width: 100%;
  flex: 1 1 260px;
  border: none;
  border-radius: 30px;
  background: rgba(23, 26, 31, 0.75);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 300ms;

  @media (min-width: 600px) {
    flex: 0 1 260px;
  }
`;

export const RightBtn = styled(LeftBtn)`
  background: rgba(255, 255, 255, 0.75);
  color: var(--clr-font);
`;

export const Arrow = styled.div`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  animation: jump infinite 2s;

  @keyframes jump {
    0%,
    10%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(8px);
    }

    60% {
      transform: translateY(3px);
    }
  }
`;
