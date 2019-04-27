import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../search-bar/SearchBar';
import Card from '../card/Card';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 12% 10% 78%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-weight: 600;
    font-size: 1.35rem;
    font-family: 'Merienda', cursive !important;
  }
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
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
          id: 1
        }
      ]
    }
  }

  gotToDetail = (id) => {
    console.log(id);
  }

  render() {
    const { businesses } = this.state;
    return(
      <Wrapper>
        <TitleWrapper>
          <span>Haz tu turno ahora!</span>
        </TitleWrapper>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
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

export default SearchPage;