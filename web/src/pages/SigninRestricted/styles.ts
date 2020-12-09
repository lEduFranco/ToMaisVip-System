import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

// import signInBackgroundImg from '../../assets/logo_10_anos-01.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 75%;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #3f1227;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #b28d9f;
      }
    }
  }
`;

export const Back = styled.div`
  width: 100%;

  /* background: url($) no-repeat center;
  background-size: contain;
  margin-bottom: -147px; */

    padding-top: 50px;
    padding-right: 40px;

    display: flex;

    align-items: flex-start;
    justify-content: flex-end;

   a {
    color: #b28d9f;

    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      /* color: ${shade(0.5, '#b28d9f')}; */
      color: #3f1227;
    }
  }
`;
