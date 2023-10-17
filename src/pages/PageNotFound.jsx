import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#1a2238] ">
      <h1 className="text-[8rem] font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-black text-white px-2 text-xl rounded absolute rotate-12">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link 
            to='/' className=" px-5 py-3 border rounded-lg border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-[#1a2238] hover:font-bold duration-150 ease-in-out"
        >
            Go Back To Home
        </Link>
        
      </button>
    </div>
  );
}

export default PageNotFound;
