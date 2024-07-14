import { FaUncharted } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Header({ children }) {
  return (
    <div className="w-full  mt-10  px-4">
      <nav className="w-full bg-slate-600 rounded-xl px-4">
        <ul className="w-full flex justify-around items-center min-h-16 gap-x-2">
          <li className="font-bold text-base md:text-2xl text-white">Logo</li>
          {children}
        </ul>
      </nav>
    </div>
  );
}

export default Header;

export function SearchCharacter({ query, setQuery }) {
  return (
    <li>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="characters..."
        className="py-1 pb-1 md:py-1.5 text-white placeholder:text-white placeholder:text-sm md:placeholder:text-lg px-2 md:px-4 bg-slate-400 rounded-xl outline-0 border-0 max-w-32 md:max-w-max"
      />
    </li>
  );
}

export function NumOfCharacter({ numOfCharacter }) {
  return (
    <li className="text-white font-semibold text-xs md:text-base">
      Found {numOfCharacter} results
    </li>
  );
}

export function FavoriteIcon() {
  return (
    <li>
      <button className="relative">
        <span className="absolute top-0 -right-1 bg-red-500 rounded-full h-4 text-xs md:text-base md:h-6 text-white md:w-6 w-4 font-bold">
          1
        </span>
        <FaHeart className="w-6 h-6  md:w-10 md:h-10 text-white" />
      </button>
    </li>
  );
}