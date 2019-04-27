import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styled from 'styled-components';

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

class TurnzDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open } = this.props;
    return(
      <SwipeableDrawer
        open={open}
        onClose={this.props.handleClose}
        onOpen={this.props.handleOpen}
      >
        <div style={{ minWidth: '270px'  }}>
          <TitleWrapper>
            <span>Menu</span>
          </TitleWrapper>
          <MenuOptions>

          </MenuOptions>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default TurnzDrawer;