import Image from "next/image";
import Header from './components/Header'
import Info from './components/Info'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import Features from './components/Features'

export default function Homepage() {
  return (
    <>
        <div className="absolute top-0 left-0 w-full h-screen bg-[rgb(10,10,10)] bg-opacity-100 bg-[radial-gradient(ellipse_50%_80%_at_50%_0,#6e77c680,#fff0)] -z-20"></div>

        <div className="relative w-full h-screen">
            <div className="relative w-full h-screen">
                <Header />
                <Showcase />
            </div>
            
            <div className="w-full h-screen bg-[rgb(10,10,10)]">
              <Features />
              <Info />
              <Footer />
            </div>
        </div>
    </>
  );
}
