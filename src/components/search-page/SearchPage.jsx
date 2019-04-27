import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../search-bar/SearchBar';
import Card from '../card/Card';
import {withRouter} from 'react-router-dom';
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.3fr 3fr;
`;

const TitleSearch = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-weight: 600;
    font-size: 1.35rem;
    font-family: 'Merienda', cursive !important;
    color: white;
  }
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
  overflow-y: auto;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [
        {
          name: 'Lalin Style',
          address: 'C/ Costa Rica #456, Ensanche Ozama',
          employessTotal: 6,
          isOpen: true,
          id: 1
        },
        {
          name: 'La moderna',
          address: 'C/ Costa Rica #458, Ensanche Ozama',
          employessTotal: 4,
          isOpen: true,
          id: 2
        },
        {
          name: 'Bella Fama',
          address: 'C/ Costa Rica #458, Ensanche Ozama',
          employessTotal: 12,
          isOpen: true,
          id: 3
        },
        {
          name: 'Bella Fama',
          address: 'C/ Costa Rica #458, Ensanche Ozama',
          employessTotal: 12,
          isOpen: true,
          id: 4
        },
        {
          name: 'Bella Fama',
          address: 'C/ Costa Rica #458, Ensanche Ozama',
          employessTotal: 12,
          isOpen: true,
          id: 5
        },
        {
          name: 'Bella Fama',
          address: 'C/ Costa Rica #458, Ensanche Ozama',
          employessTotal: 12,
          isOpen: true,
          id: 6
        }
      ]
    }
  }

  gotToDetail = (id) => {
    this.props.history.push(`/detail/id=${id}`);
  }

  render() {
    const { businesses } = this.state;
    return(
      <Wrapper>
        <TitleSearch>
          <TitleWrapper>
            <span>Haz tu turno ahora!</span>
          </TitleWrapper>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
        </TitleSearch>
        <ContentWrapper>
          {
            businesses.map((b) => {
              
              const content = (
                <div>
                  { b.address }
                </div>
              );
              
              return <Card
                title={b.name}
                content={content}
                withFooter={false}
                gridRowsHeight='20% 80%'
                cardHeight="180px"
                key={b.id}
                id={b.id}
                handleClick={this.gotToDetail}
              />
            })
          }
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(SearchPage);