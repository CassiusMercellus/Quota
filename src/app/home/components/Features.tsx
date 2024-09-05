import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="flex flex-col justify-evenly px-20 text-center pb-20 bg-[rgb(10,10,10)]">
        <div className="px-20 flex py-10">
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4 pt-4">Set study goals</h2>
            <p className="px-20 text-lg mx-4">Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
            <Image 
              src="/jesko.png"
              width={20}
              height={20}
              alt="quota"
              className="w-1/2"
            />
        </div>
        <div className="px-20 flex py-10">
        <Image 
              src="/jesko.png"
              width={20}
              height={20}
              alt="quota"
              className="w-1/2"
            />
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4 pt-4">Visualize your study hours</h2>
            <p className="px-20 text-lg mx-4">Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
        </div>
        <div className="px-20 flex py-10">
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4 pt-4">Utilize our Desktop App</h2>
            <p className="px-20 text-lg mx-4">Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
            <Image 
              src="/jesko.png"
              width={20}
              height={20}
              alt="quota"
              className="w-1/2"
            />
        </div>
      </div>
    </>
  );
}
