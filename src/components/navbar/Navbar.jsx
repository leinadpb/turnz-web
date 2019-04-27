import React, { Component } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  height: 58px;
  background-color: white;
  box-shadow: 0px 1px 3px 0px #ccc;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  box-sizing: border-box;
`;

const MenuWrapper = styled.div`
  margin-left: 16px;
`;

const LogoWrapper = styled.div`
  margin: 8px 0px;
  margin-left: -24px;
`;

const SocialIcon = styled.div`
  width: 32px;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <MenuWrapper>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </MenuWrapper>
        <LogoWrapper>
          <span style={{ fontWeight: '600', fontSize: '1.25rem' }}>Turnz</span>
        </LogoWrapper>
        <SocialIcon>

        </SocialIcon>
      </Wrapper>
    );
  }
}

export default Navbar;