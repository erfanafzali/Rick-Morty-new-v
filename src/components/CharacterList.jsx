import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Pagination from "./Pagination";

function CharacterList({ character, isLoading, page, setPage, handleSelect }) {

 
  return (
    <div className="w-full mt-10 order-2 md:order-none">
      {isLoading ? (
        <p className="text-blue-200 font-bold text-xl">Please wait ...</p>
      ) : (
        <ul className="w-full flex flex-col justify-center items-center gap-y-5  md:px-0">
          {character.map((item) => (
            <Character
              key={item.id}
              item={item}
              handleSelect={handleSelect}
            />
          ))}
        </ul>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;

function Character({ item, handleSelect }) {
  return (
    <li className="w-full bg-slate-600 min-h-10 rounded-xl flex justify-between items-center px-2 py-2 ">
      <div className="flex justify-center items-center gap-x-2">
        <img src={item.image} alt="" className="max-h-20 rounded-xl" />
        <div className="w-full flex flex-col justify-center items-start ">
          <div>
            <span>{item.gender === "Male" ? "👦" : "👩‍💼"}</span>
            <span className="font-bold text-white text-xl ">
              &nbsp; {item.name}
            </span>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 text-gray-300 text-lg font-semibold">
            <div
              className={` w-3 h-3 rounded-full  ${
                item.status === "Dead"
                  ? "bg-red-500"
                  : item.status === "Alive"
                  ? "bg-green-500"
                  : "bg-yellow-700"
              }`}
            ></div>
            <span>{item.status}</span>
            <span> - {item.species}</span>
          </div>
        </div>
      </div>
      <button onClick={() => handleSelect(item.id)}>
        <IoEye className="w-8 h-8 text-white" />
      </button>
    </li>
  );
}
