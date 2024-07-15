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

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}&page=${page}`
        );
        setCharacter(data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  const handleSelect = (id) => {
    setSelectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container mx-auto">
      <Header allCharacters={character}>
        <SearchCharacter query={query} setQuery={setQuery} />
        <NumOfCharacter numOfCharacter={character.length} />
        <FavoriteIcon />
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
        <CharacterDetail episodes={episodes} selectId={selectId} />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return (
    <main className="w-full lg:flex-row flex-col flex justify-center items-start md:gap-x-10  px-4 mb-20">
      {children}
    </main>
  );
}
