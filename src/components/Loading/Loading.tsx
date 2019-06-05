import React, { FC } from 'react';

import { Props } from './Loading.Types';

import { Wrapper } from './Loading.Styles';

const Loading: FC<Props> = ({}) => {
  return (
    <Wrapper>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </Wrapper>
  );
};

export default Loading;
