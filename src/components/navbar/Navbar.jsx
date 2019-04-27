import React, { Component } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import TurnzDrawer from '../turnz-drawer/TurnzDrawer';

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
  z-index: 1000;
`;

const MenuWrapper = styled.div`
  margin-left: 0px;
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
    const { openDrawer } = this.props;
    return (
      <>
        <Wrapper>
          <MenuWrapper>
            <IconButton onClick={this.props.handleOpen}>
              <MenuIcon />
            </IconButton>
          </MenuWrapper>
          <LogoWrapper>
            <span style={{ fontWeight: '600', fontSize: '1.25rem', color: '#323d4b' }}>Turnz</span>
          </LogoWrapper>
          <SocialIcon>

          </SocialIcon>
        </Wrapper>
        <TurnzDrawer open={openDrawer} handleClose={this.props.handleClose} handleOpen={this.props.handleOpen} />
      </>
    );
  }
}

export default Navbar;