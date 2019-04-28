import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import InputIcon from '@material-ui/icons/Input';
import { withRouter } from 'react-router-dom';

const TitleWrapper = styled.div`
  height: 120px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const MenuOptions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const DrawerWrapper = styled.div`
  width: 100vw;
  @media only screen and (min-width: 768px) {
    min-width: 320px;
    width: 100%;
  }
`;

const CloseWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const MenuOption = styled.div`
  width: 100%;
  min-height: auto;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 16px 16px 16px 16px;
`;

class TurnzDrawer extends Component {
  constructor(props) {
    super(props);
  }

  navigateTo = (url) => {
    this.props.handleClose();
    this.props.history.push(url);
  }

  render() {
    const { open } = this.props;
    return(
      <SwipeableDrawer
        open={open}
        onClose={this.props.handleClose}
        onOpen={this.props.handleOpen}
      >
        <DrawerWrapper>
          <CloseWrapper>
            <IconButton onClick={this.props.handleClose}>
              <CloseIcon />
            </IconButton>
          </CloseWrapper>
          <TitleWrapper>
            <span>Menu</span>
          </TitleWrapper>
          <MenuOptions>
            <MenuOption onClick={() => this.navigateTo('/')}>
              <HomeIcon />
              <span>Inicio</span>
            </MenuOption>
            <MenuOption onClick={() => this.navigateTo('/contact-us')}>
              <PhoneIcon />
              <span>Contactenos</span>
            </MenuOption>
            <MenuOption onClick={() => this.navigateTo('/sign-in')}>
              <InputIcon />
              <span>Iniciar sesion</span>
            </MenuOption>
          </MenuOptions>
        </DrawerWrapper>
      </SwipeableDrawer>
    );
  }
}

export default withRouter(TurnzDrawer);