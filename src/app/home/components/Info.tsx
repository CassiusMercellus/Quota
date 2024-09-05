import Image from "next/image";

export default function Info() {
  return (
    <>
      <div className="flex justify-evenly px-20 text-center bg-[rgb(10,10,10)]">
        <div className="px-20">
          <h2 className="text-3xl font-bold mb-4">About Quota</h2>
          <p>Quota is a simple yet powerful study app designed to help you take control of your learning time. With Quota, you can effortlessly track your study hours, set daily or weekly goals, and visualize your progress over time. Our user-friendly interface makes it easy to stay organized and motivated, whether you're cramming for finals, preparing for a professional exam, or simply trying to build a new habit. With Quota, every minute counts—transform your study sessions into meaningful achievements.
          </p>
        </div>
        <div className="px-20">
          <h2 className="text-3xl font-bold mb-4">About the Developer</h2>
          <p>Quota was developed by a passionate learner who understands the challenges of balancing study time with everyday life. With a background in software development and a love for productivity tools, the developer created Quota to simplify time management for students and lifelong learners alike. By combining a clean design with intuitive features, the goal was to make an app that feels both familiar and empowering, allowing you to focus on what truly matters: learning and growing.</p>
        </div>
        <div className="px-20">
          <h2 className="text-3xl font-bold mb-4">The Future of Quota</h2>
          <p>The future of Quota is bright and exciting! We are constantly working to add new features that make studying more effective and engaging. Soon, users can expect the introduction of personalized study tips, progress-sharing capabilities, and integration with popular calendar apps. We're also exploring options for gamification, such as study streaks and rewards, to make tracking your progress even more fun. Stay tuned—Quota is evolving, and we can't wait to grow with you on your learning journey!
          </p>
        </div>
      </div>
    </>
  );
}
