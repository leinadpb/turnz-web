import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '40%',
  },
  fullField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  }
});

const TitleWrapper = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > h2 {
    font-family: 'Merienda', cursive !important;
  }
`;

const FormWrapper = styled.div`
  padding: 16px;
  width: 95%;
  margin: 8px;
  margin: 0 auto;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ActionButton = styled.div`
  width: 80%;
  padding: 8px;
  margin-top: 16px;
  border-radius: 16px;
  box-shadow: 0px 0px 3px 0px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  & > span {
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SwitchFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  & > span {
    color: blue;
    text-decoration: underline;
    font-size: 0.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
        fullname: ''
      },
      showSignUp: true
    }
  }
  handleInput = (e) => {
    let fieldId = e.target.id;
    let fieldValue = e.target.value;
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [fieldId]: fieldValue
        }
      }
    });
  }
  chooseForm = (showSignUp) => {
    const { classes } = this.props;

    let form = showSignUp ?
    (
      <FormWrapper>
        <TextField
          id="fullname"
          label="Full name"
          className={classes.textField}
          value={this.state.user.fullname}
          onChange={this.handleInput}
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.user.email}
          onChange={this.handleInput}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.fullField}
          value={this.state.user.password}
          onChange={this.handleInput}
          margin="normal"
        />
      </FormWrapper>
    )
    :
    (
      <FormWrapper>
        <TextField
          id="email"
          label="Email"
          className={classes.fullField}
          value={this.state.user.email}
          onChange={this.handleInput}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.fullField}
          value={this.state.user.password}
          onChange={this.handleInput}
          margin="normal"
          type="password"
        />
      </FormWrapper>
    );
    return form;
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        showSignUp: !prevState.showSignUp,
        user: {
          ...prevState.user,
          password: ''
        }
      }
    });
  }

  handleLogin = () => {
    const { user } = this.state;

  }

  handleSignuo = () => {
    const { user } = this.state;
  }

  render() {
    const { user, showSignUp } = this.state;

    let signForm = this.chooseForm(showSignUp);

    return(
      <Wrapper>
        <TitleWrapper>
          <h2>
            {
              (showSignUp) ? 'Sign up now!' : 'Sign in'
            }
          </h2>
        </TitleWrapper>
        { signForm }
        <ActionButton>
          <span>
            {
              (showSignUp) ? 'Register' : 'Login'
            }
          </span>
        </ActionButton>
        <SwitchFormWrapper>
          {
            (showSignUp) ? <span onClick={this.toggleForm}>Do you have an account? Login here.</span>
            : <span onClick={this.toggleForm}>Don't have an account yet? Register here.</span>
          }
        </SwitchFormWrapper>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(SignInPage);
