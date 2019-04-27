import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: null,
      businessId: -1
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    this.setState({
      businessId: id
    })
  }

  render() {
    return(
      <>
        Detail page
        {this.state.businessId}
      </>
    );
  }
}

export default withRouter(DetailPage);