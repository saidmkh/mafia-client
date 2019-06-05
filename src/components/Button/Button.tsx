import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Props } from './Button.Types';
import { StyledButton } from './Button.Styles';

import Loading from '../Loading';

const Button: FC<Props> = ({ text, href, loading, ...otherProps }) => {
  if (href) {
    return (
      <Link {...otherProps} to={href}>
        {text} {loading && <Loading />}
      </Link>
    );
  }

  return (
    <StyledButton {...otherProps}>
      {text} {loading && <Loading />}
    </StyledButton>
  );
};

export default Button;
