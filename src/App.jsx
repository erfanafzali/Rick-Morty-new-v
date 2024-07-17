import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Header, {
  FavoriteIcon,
  NumOfCharacter,
  SearchCharacter,
} from "./components/Header";

import { episodes } from "./data/data";
import axios from "axios";

function App() {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectId, setSelectId] = useState("");
  const [favorite, setFavorite] = useState(() =>
    JSON.parse(localStorage.getItem("FAVORITE")) || []
  );

  useEffect(() => {
    localStorage.setItem("FAVORITE", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}&page=${page}`,
          { signal }
        );
        setCharacter(data.results.slice(0, 5));
      } catch (error) {
        if (!axios.isCancel()) {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [query, page]);

  const handleSelect = (id) => {
    setSelectId((prevId) => (prevId === id ? null : id));
  };

  const handleFavCharecter = (character) => {
    setFavorite((prevFav) => [...prevFav, character]);
  };

  const deleteHandler = (id) => {
    setFavorite((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };

  const isAddedFav = favorite.map((fav) => fav.id).includes(selectId);

  return (
    <div className="container mx-auto">
      <Header allCharacters={character}>
        <SearchCharacter query={query} setQuery={setQuery} />
        <NumOfCharacter numOfCharacter={character.length} />
        <FavoriteIcon favorite={favorite} deleteHandler={deleteHandler} />
      </Header>
      <Main>
        <CharacterList
          selectId={selectId}
          handleSelect={handleSelect}
          character={character}
          isLoading={isLoading}
          page={page}
          setPage={setPage}
        />
        <CharacterDetail
          episodes={episodes}
          selectId={selectId}
          handleFavCharecter={handleFavCharecter}
          isAddedFav={isAddedFav}
        />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return (
    <main className="w-full lg:flex-row flex-col flex justify-center items-start md:gap-x-10  px-4 ">
      {children}
    </main>
  );
}
