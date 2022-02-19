import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
import { useParams } from "react-router-dom";

const Home = () => {
  //location
  const { id } = useParams();

  const dispatch = useDispatch();
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <GameList>
      {id && <GameDetails />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(({ name, id, released, background_image }) => (
          <Game
            name={name}
            released={released}
            image={background_image}
            id={id}
            key={id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map(({ name, id, released, background_image }) => (
          <Game
            name={name}
            released={released}
            image={background_image}
            id={id}
            key={id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map(({ name, id, released, background_image }) => (
          <Game
            name={name}
            released={released}
            image={background_image}
            id={id}
            key={id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
