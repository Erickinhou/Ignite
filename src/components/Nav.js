import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { loadSearch, clearSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(loadSearch(textInput));
    } else {
      dispatch(clearSearch());
    }
    setTextInput("");
  };

  const handleClear = () => {
    dispatch(clearSearch());
    setTextInput("");
  };
  return (
    <StyledNav>
      <Logo onClick={handleClear}>
        <img src={logo} alt="ignite" />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={onSubmit} className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    font-size: medium;
  }
  button {
    font-size: medium;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white-space;
    font-family: "Montserrat", sans-serif;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
  h1 {
    margin-top: 0.3rem;
  }
`;

export default Nav;
