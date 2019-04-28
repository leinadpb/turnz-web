import React, { Component } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  max-height: 90%;
  overflow: auto;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const ModalContent = styled.div`
  padding: ${props => props.padding};
  width: 100%;
  height: 100%;
  overflow: auto;
`;

class TurnzModal extends Component {
  render() {
    const { withPadding, padding } = this.props;
    let modalPadding = '16px';
    if (withPadding) {
      if (!!padding) {
        modalPadding = padding;
      }
    } else {
      modalPadding = '0px';
    }
    return(
      <Wrapper>
        <ModalClose>
          <IconButton onClick={this.props.handleClose}>
            <CloseIcon />
          </IconButton>
        </ModalClose>
        <ModalContent padding={modalPadding}>
          { this.props.children }
        </ModalContent>
      </Wrapper>
    );
  }
}

export default TurnzModal;