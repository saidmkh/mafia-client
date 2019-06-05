import React, { FC } from 'react';

import { Props } from './Header.Types';

import Button from '../Button';
import { HeaderContainer, Wrapper } from './Header.Styles';

const Header: FC<Props> = ({}) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Button text="Sign-in" />
        <Button text="Registration" />
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
