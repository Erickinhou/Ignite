import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useEffect } from "react";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ id }) => {
  const navigate = useNavigate();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const [hasScrollbar, setHasScrollbar] = useState(true);
  useEffect(() => {
    if (!isLoading) document.body.style.overflow = "hidden";
  }, [isLoading]);
  const exitElementHandler = (e) => {
    const element = e.target;
    if (
      element.classList.contains("shadow") ||
      element.classList.contains("close-button")
    ) {
      setHasScrollbar(false);
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const GetStars = ({ rating }) => {
    const stars = [];
    console.log(rating);
    const gameHating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= gameHating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow
          hasScrollbar={hasScrollbar}
          className="shadow"
          onClick={exitElementHandler}
        >
          <Detail layoutId={id}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${id}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                <GetStars rating={game.rating} />
              </Rating>
              <Info>
                <div className="close-button">X</div>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${id}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen?.results?.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={`${game.slug}_${screen.id}`}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: ${({ hasScrollbar }) => (hasScrollbar ? "scroll" : "hidden")};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
    margin-bottom: 0.2rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    left: 0%;
    border-radius: 0;
    padding: 0;
  }
`;

const Rating = styled.div`
  @media screen and (max-width: 720px) {
    margin: 0 0.5rem;

    p {
      font-size: 0.7rem;
    }
    h3 {
      text-align: left;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
    margin: 0;
  }
  @media screen and (max-width: 720px) {
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: right;
  .close-button {
    display: none;
  }
  @media screen and (max-width: 720px) {
    margin: 0 1rem;
    .close-button {
      display: block;
      margin-top: 0.4rem;
      padding: 0.2rem;
      font-weight: bold;
    }
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16px, 1fr));
    grid-column-gap: 0.2rem;
    img {
      margin: 0;
    }
  }
`;
const Media = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media screen and (max-width: 720px) {
    font-size: 0.6rem;
    padding: 0 0.6rem;
    text-align: justify;
  }
`;

export default GameDetail;
