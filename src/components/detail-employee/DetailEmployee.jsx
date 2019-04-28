import React, { Component } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import { withRouter } from 'react-router-dom';
import AddBtn from '../add-btn/AddBtn';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 30% 60%;
  height: calc(100vh - 58px);
  @media only screen and (min-width: 768px) {
    max-width: 968px;
    margin: 0 auto;
  }
`;

const ActionBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 16px;
`;

const EmployeeName = styled.div`
  & span {
    font-weight: 600;
    font-size: 1.15rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 67% 33%;
  margin: 0 auto;
  & > img {
    width: 75px;
    height: 75px;
    background-size: cover;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 3px 0px #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  box-shadow: inset 0px 3px 5px 2px #ccc;
  @media only screen and (min-width: 768px) {
    box-shadow: none;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0px 0px 3px 0px #ccc;
  display: grid;
  grid-template-columns: 25% 58% 17%;
  margin-bottom: 8px;
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
  &:hover {
    cursor: pointer;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
  }
`;

const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
  overflow-x: auto;
  color: white;
`;

const ScoreNumber = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-weight: 600;
    color: white;
    font-family: 'Merienda', cursive !important;
  }
`;

class DetailEmployee extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
      isLoading: true,
      turns: [
        {
          turn_id: 1,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 1
        },
        {
          turn_id: 2,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 2
        },
        {
          turn_id: 3,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 3
        },
        {
          turn_id: 4,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 4
        },
        {
          turn_id: 5,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 5
        },
        {
          turn_id: 6,
          user_photo: '/images/no-photo.png',
          user_name: 'Israel Berroa',
          turn: 6
        },
      ]
    }
  }

  componentDidMount = () => {
    // Simulate Call to API
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { turns } = this.state;
    return(
      <Wrapper>
        <ActionBar>
          <IconButton style={{ marginLeft: '16px' }} onClick={this.goBack}>
            <ArrowBackIcon />
          </IconButton>
          <EmployeeName>
            <span>Daniel J. Pena</span>
          </EmployeeName>
        </ActionBar>
        <Header>
          <ImageWrapper>
            <img alt="Lalin Style" src="/images/no-photo.png" />
            <InfoWrapper>
              <div>
                4 People in turn
              </div>
              <div>
                3.5
              </div>
            </InfoWrapper>
          </ImageWrapper>
        </Header>
        <Content>
          {
            turns.map((t) => (
              <Card key={t.turn_id}>
                <CardImage>
                  <img alt="Lalin Style" src={t.user_photo} />
                </CardImage>
                <CardInfo>
                  {t.user_name}
                </CardInfo>
                <ScoreNumber>
                  <span>{t.turn}</span>
                </ScoreNumber>
              </Card>
            ))
          }
        </Content>
        <AddBtn />
      </Wrapper>
    );
  }
}

export default withRouter(DetailEmployee);