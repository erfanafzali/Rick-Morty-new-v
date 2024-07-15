function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 20) return;
    setPage((page) => page + 1);
  };

  return (
    <div className="text-white py-12 flex justify-center items-center gap-x-3 md:gap-x-5 mx-auto  md:max-w-[1000px] px-5 ">
      <button
        className={`border px-1 py-0.5 md:px-2 md:pb-1  text-sm md:text-base rounded-lg bg-slate-700 font-semibold ${
          page <= 1 ? "opacity-[0.5] cursor-not-allowed" : ""
        }`}
        onClick={previousHandler}
      >
        previous
      </button>
      <p
        className={`${
          page === 1
            ? "bg-slate-500 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}
      >
        1
      </p>
      <p
        className={`${
          page === 2
            ? "bg-slate-500 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}
      >
        2
      </p>
      <p>
        {page > 2 && page < 19 && (
          <div className="flex justify-center items-center gap-x-5">
            <span>...</span>
            <p
              className={`${
                page
                  ? "bg-slate-500 text-white border px-2 rounded-lg"
                  : "border px-2 rounded-lg"
              }`}
            >
              {page}
            </p>
          </div>
        )}
      </p>
      <p>...</p>
      <p
        className={`${
          page === 9
            ? "bg-slate-500 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}
      >
        19
      </p>
      <p
        className={`${
          page === 10
            ? "bg-slate-500 text-white border px-2 rounded-lg"
            : "border px-2 rounded-lg"
        }`}
      >
        20
      </p>
      <button
        className={`border  px-1 py-0.5 md:px-2 md:pb-1  text-sm md:text-base rounded-lg bg-slate-700 font-semibold ${
          page >= 20 ? "opacity-[0.5] cursor-not-allowed" : ""
        }`}
        onClick={nextHandler}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
