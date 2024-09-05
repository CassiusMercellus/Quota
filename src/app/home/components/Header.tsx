import Image from "next/image";


export default function Header() {
  return (
    <>
        <div className="h-24">
            <div className="w-full flex justify-evenly p-2 pt-8">
                <div className="flex items-center h-12">
                    <Image 
                    src="/quotas.png"
                    width={150}
                    height={50}
                    alt="quota" 
                    />
                </div>
                <div className="flex justify-evenly items-center h-12">
                    <p className="hover:underline hover:decoration-solid rounded-lg px-2 font-bold mx-2">Home</p>
                    <p className="hover:underline hover:decoration-solid rounded-lg px-2 font-bold mx-2">Features</p>
                    <p className="hover:underline hover:decoration-solid rounded-lg px-2 font-bold mx-2">Info</p>
                    <p className="hover:underline hover:decoration-solid rounded-lg px-2 font-bold mx-2">Socials</p>
                </div>
                <div className="flex justify-evenly h-12">
                    <button className="hover:text-violet-500 hover:scale-105 bg-white text-black rounded-lg px-2 mr-3 duration-300">Open Web App</button>
                    <button className="hover:bg-white hover:text-violet-500 hover:scale-105 font-bold rounded-lg px-2 duration-300">Sign In</button>
                
                </div>
            </div>
        </div>
        
    </>
  );
}
