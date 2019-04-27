import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/search-page/SearchPage';
import Navbar from './components/navbar/Navbar';

const RouterWrapper = styled.div`
  margin-top: 60px;
  background-color: #f7f7f7;
`;

function App() {
  return (
    <>
      
      <Router>
      <>
          <Navbar />
          <RouterWrapper>
            <Switch>
              <Route exact path="/" render={ () => <SearchPage />  }></Route>
            </Switch>
          </RouterWrapper>
       </>
      </Router>
    </>
  );
}

export default App;
