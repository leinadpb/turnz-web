import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/search-page/SearchPage';
import Navbar from './components/navbar/Navbar';
import DetailPage from './components/detail-page/DetailPage';
import DetailEmployee from './components/detail-employee/DetailEmployee';

const RouterWrapper = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 768px) {
    max-width: 2048px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  handleDrawerClose = () => {
    this.setState({
      drawerOpen: false
    });
  }
  handleDrawerOpen = () => {
    this.setState({
      drawerOpen: true
    });
  }

  render() {
    const { drawerOpen } = this.state;
    return (
      <>
        <Router>
        <>
            <Navbar openDrawer={drawerOpen} handleClose={this.handleDrawerClose} handleOpen={this.handleDrawerOpen} />
            <RouterWrapper>
              <Switch>
                <Route exact path="/" render={ () => <SearchPage />  }></Route>
                <Route exact path="/detail/:id" render={ () => <DetailPage />  }></Route>
                <Route exact path="/employee/:id" render={ () => <DetailEmployee /> } />
              </Switch>
            </RouterWrapper>
         </>
        </Router>
      </>
    );
  }
}

export default App;
