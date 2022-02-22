import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
import { useParams } from "react-router-dom";

import { fadeIn } from "../animations";

const Home = () => {
  //location
  const { id } = useParams();

  const dispatch = useDispatch();
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <GameList varants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{id && <GameDetails id={id} />}</AnimatePresence>
        {searched.length !== 0 && (
          <>
            <h2>Searched</h2>
            <Games>
              {searched.map(({ name, id, released, background_image }) => (
                <Game
                  name={name}
                  released={released}
                  image={background_image}
                  id={id}
                  key={id}
                />
              ))}
            </Games>
          </>
        )}
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
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 80%;
    margin: 0 auto;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 0.8rem;
  }
`;

export default Home;
