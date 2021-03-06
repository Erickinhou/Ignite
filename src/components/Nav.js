import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import logo from "../img/logo.svg";
import { loadSearch, clearSearch } from "../actions/gamesAction";

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
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
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
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 80%;
    margin: 0 auto;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      input {
        width: auto;
        margin: 0;
      }
      button {
        height: 100%;
      }
    }
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
