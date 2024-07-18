import { IoIosCloseCircle } from "react-icons/io";

function Modal({ open, setOpen, title, children  }) {
  if (!open) return null;
 

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className="w-screen h-screen fixed inset-0 backdrop-blur-sm"
      ></div>

      <div className="absolute gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-5 top-[20%] sm:top-[26%] bg-slate-700 left-[5%] w-[90%] md:w-[40%] md:left-[30%]  p-1 sm:p-2 md:p-3 lg:p-4 rounded-xl shadow-lg shadow-slate-500 flex flex-col justify-center ">
        <div className="w-full flex justify-between items-center border-b-4 border-white pb-4">
          <h1 className="font-bold text-xl  text-white">{title}</h1>
          <button  onClick={() => setOpen(false)}>
            <IoIosCloseCircle className="text-red-500 h-7 w-7" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
