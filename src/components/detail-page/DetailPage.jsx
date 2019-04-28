import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton, CardContent } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 30% 60%;
  height: calc(100vh - 58px);
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

const BusinessTitle = styled.div`
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
`;

const Card = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0px 0px 3px 0px #ccc;
  display: grid;
  grid-template-columns: 25% 58% 17%;
  margin-bottom: 8px;
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
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

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: null,
      businessId: -1,
      employess: [
        {
          user_name: 'Daniel J. Pena',
          score: 4.5,
          user_photo: '/images/no-photo.png',
          turn_id: 1
        },
        {
          user_name: 'Jhon Doe',
          score: 4.8,
          user_photo: '/images/no-photo.png',
          turn_id: 2
        },
        {
          user_name: 'Jhon Doe',
          score: 3.6,
          user_photo: '/images/no-photo.png',
          turn_id: 3
        },
        {
          user_name: 'Jhon Doe',
          score: 4.2,
          user_photo: '/images/no-photo.png',
          turn_id: 4
        }
      ]
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    this.setState({
      businessId: id
    })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { employess } = this.state;
    return(
      <Wrapper>
        <ActionBar>
          <IconButton style={{ marginLeft: '16px' }} onClick={this.goBack}>
            <ArrowBackIcon />
          </IconButton>
          <BusinessTitle>
            <span>Lalin Style</span>
          </BusinessTitle>
        </ActionBar>
        <Header>
          <ImageWrapper>
            <img alt="Lalin Style" src="/images/sample-logo.jpg" />
            <InfoWrapper>
              <div>
                4 Employees
              </div>
              <div>
                OPEN
              </div>
            </InfoWrapper>
          </ImageWrapper>
        </Header>
        <Content>
          {
            employess.map((e) => (
              <Card key={e.turn_id}>
                <CardImage>
                  <img alt="Lalin Style" src={e.user_photo} />
                </CardImage>
                <CardInfo>
                  {e.user_name}
                </CardInfo>
                <ScoreNumber>
                  <span>{e.score}</span>
                </ScoreNumber>
              </Card>
            ))
          }
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(DetailPage);