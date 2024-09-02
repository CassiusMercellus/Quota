import Image from "next/image";
import Header from './components/Header'
import Info from './components/Info'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

export default function Homepage() {
  return (
    <>
        <div className="relative w-full h-screen">
            <div className="bg-[url('/background.png')] bg-cover w-full h-screen absolute inset-0"></div>
            <div className="relative w-full h-screen backdrop-blur-md backdrop-opacity-60">
                <Header />
                <Showcase />
                <Info />
                <Footer />
            </div>
        </div>
    </>
  );
}
