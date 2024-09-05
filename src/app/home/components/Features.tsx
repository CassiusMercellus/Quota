import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="flex flex-col justify-evenly px-20 text-center mb-20">
        <div className="px-20 flex">
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4">Set study goals</h2>
            <p>Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
            <p className="w-1/2">img</p>
        </div>
        <div className="px-20 flex">
            <p className="w-1/2">img</p>
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4">Visualize your study hours</h2>
            <p>Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
        </div>
        <div className="px-20 flex">
            <div className="flex flex-col w-1/2">
            <h2 className="text-3xl font-bold mb-4">Utilize our Desktop App</h2>
            <p>Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
            </p>
            </div>
            <p className="w-1/2">img</p>
        </div>
      </div>
    </>
  );
}
