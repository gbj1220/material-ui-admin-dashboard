import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  CircularProgress,
  Snackbar,
  Grid,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

import useInputHooks from "../Hooks/useInputHooks";
import useEmailHooks from "../Hooks/useEmailHooks";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 350,
    },
  },
}));

function Signup() {
  const classes = useStyles();

  const [
    username,
    setUsername,
    inputUsernameError,
    errorUsernameMessage,
  ] = useInputHooks();

  const [
    firstName,
    setFirstName,
    inputFirstNameError,
    errorFirstNameMessage,
  ] = useInputHooks();

  const [
    lastName,
    setLastName,
    inputLastNameError,
    errorLastNameMessage,
  ] = useInputHooks();

  const [email, setEmail, inputEmailError, errorEmailMessage] = useEmailHooks();

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: "30vh" }}
    >
      <Grid item xs={12}>
        <form
          className={classes.root}
          autoComplete='on'
          onSubmit={handleOnSubmit}
        >
          <FormControl error={inputEmailError}>
            <InputLabel htmlFor='component-email'>Email</InputLabel>
            <Input
              id='component-email'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e)}
            />
            <FormHelperText id='component-error-text'>
              {inputEmailError ? errorEmailMessage : null}
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl error={inputUsernameError}>
            <InputLabel htmlFor='component-username'>Username</InputLabel>
            <Input
              id='component-username'
              name='Username'
              value={username}
              onChange={(e) => setUsername(e)}
            />
            <FormHelperText id='component-error-text'>
              {inputUsernameError && errorUsernameMessage}
            </FormHelperText>
          </FormControl>

          <br />
          <FormControl error={inputFirstNameError}>
            <InputLabel htmlFor='component-firstName'>First Name</InputLabel>
            <Input
              id='component-firstName'
              name='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e)}
            />
            <FormHelperText id='component-error-text'>
              {inputFirstNameError && errorFirstNameMessage}
            </FormHelperText>
          </FormControl>

          <br />
          <FormControl error={inputLastNameError}>
            <InputLabel htmlFor='component-lastName'>Last Name</InputLabel>
            <Input
              id='component-lastName'
              name='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e)}
            />
            <FormHelperText id='component-error-text'>
              {inputLastNameError && errorLastNameMessage}
            </FormHelperText>
          </FormControl>
          {/*
          <br />
          <FormControl error={null}>
            <InputLabel htmlFor="component-password">Password</InputLabel>
            <Input
              type="password"
              id="component-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText id="component-error-text"> </FormHelperText>
          </FormControl> */}

          <br />
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Signup;
