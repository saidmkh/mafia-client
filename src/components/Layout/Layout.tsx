import React, { FC, useEffect } from 'react';

import { Props } from './Layout.Types';

import { Wrapper, Container, Content } from './Layout.Styles';
import Header from '../Header';

const Layout: FC<Props> = ({ pageTitle, children }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};

export default Layout;
