import React, { Component } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Wrapper = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 60px;
  height: 60px;
  @media only screen and (min-width: 768px) {
    bottom: 16px;
    right: 16px;
    width: 70px;
    height: 70px;
  }
`;

const ButtonWrapper = styled(IconButton)`
  border-radius: 50%;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 6px 0px rgb(0, 0, 0, 1);
`;

const Icon = styled(AddIcon)`
  color: white;
`;

class AddBtn extends Component {
  render() {
    return(
      <Wrapper>
        <ButtonWrapper>
          <Icon />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default AddBtn;