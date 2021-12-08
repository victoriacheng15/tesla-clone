import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0 1.5rem 0;
  width: 100%;
  height: 100vh;
  background: ${({ bgImage }) => `url(src/assets/${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
      box-shadow: 0 1px 0 var(--clr-font);
      transition: box-shadow 300ms;

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

  button {
    padding: 0.5rem 1.5rem;
    flex: 1 1 100%;
    font-size: 12px;
    text-transform: uppercase;
    transition: 300ms;

    @media (min-width: 650px) {
      flex: 0 1 250px;
    }
  }

  button:last-child {
    background: ${({ theme: { buttons } }) => buttons.lightButton};
    color: var(--clr-font);
  }

  button:first-child {
    background: ${({ theme: { buttons } }) => buttons.darkButton};
    color: #fff;
  }
`;

export const Arrow = styled.div`
  color: #fff;
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
