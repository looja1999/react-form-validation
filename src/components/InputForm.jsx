import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/use-input";

// Styling
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin: 15px auto 10px auto;
`;

const InputText = styled.input.attrs({ placeholder: "Enter here" })`
  height: 1.3rem;
  width: 95%;
`;

const Button = styled.input.attrs({ type: "submit" })`
  margin: 20px auto;
  height: 40px;
  width: 100px;
  font-size: 18px;
  color: #fff;
  background-color: purple;
  border-radius: 0.2rem;
  border-color: #ccc;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const InputForm = () => {
  //useInput => Custom hooks

  //First Name
  const {
    input: enteredFirstName,
    setInput: setFirstEnteredName,
    setIsTouched: setFirstNameIsTouched,
    isValid: enteredFirstNameIsValid,
    isInvalid: enteredFirstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  //Last Name
  const {
    input: enteredLastName,
    setInput: setEnteredLastName,
    setIsTouched: setLastNameIsTouched,
    isValid: enteredLastNameIsValid,
    isInvalid: enteredLastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    input: enteredEmail,
    setInput: setEnteredEmail,
    setIsTouched: setEmailIsTouched,
    isValid: enteredEmailIsValid,
    isInvalid: enteredEmailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid)
    formIsValid = true;

  //Handlers
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    const user = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
    };

    console.log(user);

    // Name
    setFirstEnteredName("");
    setFirstNameIsTouched(false);

    // last name
    setLastNameIsTouched(false);
    setEnteredLastName("");

    // Email
    setEmailIsTouched(false);
    setEnteredEmail("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* First name */}
      <Label> First name </Label>
      <InputText
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        value={enteredFirstName}
      />
      {enteredFirstNameIsInvalid && (
        <ErrorMessage> Please, enter first name </ErrorMessage>
      )}
      {/* Last name */}
      <Label> Last name </Label>
      <InputText
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        value={enteredLastName}
      />
      {enteredLastNameIsInvalid && (
        <ErrorMessage> Please, enter last name </ErrorMessage>
      )}

      {/* Email */}
      <Label> Email </Label>
      <InputText
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
        type="email"
      />
      {enteredEmailIsInvalid && (
        <ErrorMessage> Please, enter valid Email </ErrorMessage>
      )}

      {/* Submit button  */}
      <Button />
    </form>
  );
};

export default InputForm;
