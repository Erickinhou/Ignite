import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useEffect } from "react";

const GameDetail = ({ id }) => {
  const navigate = useNavigate();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const [hasScrollbar, setHasScrollbar] = useState(true);
  useEffect(() => {
    if (!isLoading) document.body.style.overflow = "hidden";
  }, [isLoading]);
  const exitElementHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      setHasScrollbar(false);
      document.body.style.overflow = "auto";
      navigate("/");
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
              <div className="rating">
                <motion.h3 layoutId={`title ${id}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <div className="media">
              <motion.img
                layoutId={`image ${id}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </div>
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
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
