import styled from 'styled-components';
import { LayoutAnimation } from '../../styles/keyframes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: 20s ${LayoutAnimation} linear infinite;
  background-size: 300% 300%;
  background-image: linear-gradient(20deg, #2196f3, #f44336);
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;
