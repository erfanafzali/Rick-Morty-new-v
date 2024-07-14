import axios from "axios";
import { useEffect, useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

function CharacterDetail({ episodes, selectId }) {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectId}`
        );
        setCharacter(data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectId) fetchData();
  }, [selectId]);

  console.log(character);

  if (!character || !selectId)
    return (
      <div className="w-full font-bold text-xl text-white text-center mt-10">
        please select a character ...
      </div>
    );

  return (
    <div className="w-full mt-10 ">
      <div className="w-full bg-slate-600 pb-4 md:pb-0 min-h-32 rounded-xl flex md:flex-row flex-col justify-center items-start overflow-hidden">
        <img
          src={character.image}
          alt=""
          className="w-full max-h-52 md:max-h-none  object-fill"
        />
        <main className="w-full">
          <CharacterInfo character={character} />
          <CharacterGeo character={character} />
        </main>
      </div>
      <Episodes episodes={episodes} />
    </div>
  );
}

export default CharacterDetail;

function CharacterInfo({ character }) {
  return (
    <div className="w-full flex flex-col justify-center items-start  pt-4 px-4">
      <div className="text-xl">
        <span>{character.gender === "Male" ? "👦" : "👩‍💼"}</span>
        <span className="font-bold text-white text-xl ">
          &nbsp; {character.name}
        </span>
      </div>
      <div className="w-full flex justify-start items-center gap-x-2 text-gray-300 text-lg font-semibold">
        <div
          className={` w-3 h-3 rounded-full  ${
            character.status === "Dead"
              ? "bg-red-500"
              : character.status === "Alive"
              ? "bg-green-500"
              : "bg-yellow-700"
          }`}
        ></div>
        <span>{character.status}</span>
        <span> - {character.species}</span>
      </div>
    </div>
  );
}

function CharacterGeo({ character }) {
  return (
    <div className="w-full px-4 pt-4 text-gray-300  font-semibold pl-7">
      <div>-{character.origin.name}</div>
      <div>-{character.location.name}</div>
      <div className="w-full flex justify-center items-center pt-6 md:pt-24">
        <button className="px-6 py-1.5 bg-slate-400 rounded-xl text-white">
          Add to favorite
        </button>
      </div>
    </div>
  );
}

function Episodes({ episodes }) {
  return (
    <div className="w-full">
      <div className="w-full bg-slate-600 min-h-10 rounded-xl mt-5">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-slate-400 font-bold text-lg md:text-xl py-4 px-3">
            List of Episodes
          </h1>
          <button className="pr-5">
            <FaSortAmountDownAlt className="text-slate-300 w-6 h-6" />
          </button>
        </div>
        <ul className="w-full flex flex-col justify-start items-center gap-y-2 pb-4">
          {episodes.map((episode, index) => (
            <li key={episode.id} className="w-full px-4 ">
              <div className="w-full flex justify-between items-center text-slate-300 font-semibold">
                <div>
                  <span>{String(index + 1).padStart(2, 0)} - </span>
                  <span> &nbsp;{episode.episode}:&nbsp;</span>
                  <span>{episode.name}</span>
                </div>
                <div className="hidden lg:flex bg-slate-400 text-slate-100 rounded-xl px-2 py-0.5 text-sm">
                  {episode.air_date}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
