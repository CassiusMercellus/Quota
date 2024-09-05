import Image from "next/image";

export default function Showcase() {
    return (
      <>
        <div className="relative w-1/3 ml-48 my-5 rounded-lg p-8 items-center justify-center flex flex-col ">
        <h1 className="text-8xl font-bold mb-8">
            Hit Your Study Goals with{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Quota
            </span>
        </h1>
          
        </div>
        <div className="flex space-x-8 w-full justify-center my-20">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300">
              Download App
            </button>
            <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300">
              Open Quota in your browser
            </button>
        </div>
      </>
    );
  }