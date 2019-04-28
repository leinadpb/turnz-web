import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px #ccc;
  width: 100%;
  height: ${props => props.height};
  display: grid;
  grid-template-rows: ${props => props.gridRows};
  margin: 8px 0px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    max-width: 480px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > span {
    font-size: 0.95rem;
  }
`;

const Content = styled.div`
  padding: 8px;
  overflow-y: auto;
`;

const Footer = styled.div`
  padding: 8px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > span {
    font-size: 0.95rem;
  }
`;

class Card extends Component {

  handleClick = (id) => {
    if (this.props.handleClick) {
      this.props.handleClick(id);
    }
  }

  render() {
    const { title, footer, content, withFooter = true, gridRowsHeight, cardHeight, id } = this.props;
    
    let gridRows = '10% 80% 10%';
    let height = '180px';

    if (!!gridRowsHeight) {
      gridRows = gridRowsHeight;
    } else {
      if (!withFooter) {
        gridRows = '10% 90%';
      }
    }

    if(!!cardHeight) {
      height = cardHeight;
    }

    return(
      <CardWrapper gridRows={gridRows} height={height} onClick={() => this.handleClick(id)}> 
        <Header>
          <span>{title}</span>
        </Header>
        <Content>
          {content}
        </Content>
       {
         withFooter ? 
          <Footer>
            <span>{footer}</span>
          </Footer>
        : null
       }
      </CardWrapper>
    );
  }
}

export default Card;