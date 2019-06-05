import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonCss = css`
  padding: 0.8rem 2rem;
  border: 0;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
`;

export const StyledButton = styled.button`
  ${buttonCss}
`;

export const StyledLink = styled(Link)`
  ${buttonCss}
`;
