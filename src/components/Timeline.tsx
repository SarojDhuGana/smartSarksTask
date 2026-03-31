import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const timelineContent = [
    {
      title: "Project Idea & Planning",
      description:
        "Defined the project goals, researched requirements, and created initial wireframes. Conducted market analysis to identify user needs, brainstormed feature ideas with the team, and prioritized tasks to create a clear roadmap for development.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Designed UI components and built interactive prototypes. Created high-fidelity mockups using Figma, established a consistent design system, and iteratively refined layouts based on feedback to ensure intuitive user experiences.",
    },
    {
      title: "Development Phase",
      description:
        "Implemented features using React and optimized performance. Developed reusable components, integrated APIs for dynamic data, applied state management strategies, and ensured responsiveness across different devices and browsers.",
    },
    {
      title: "Testing & Deployment",
      description:
        "Tested, fixed bugs, and deployed the final application. Performed unit, integration, and end-to-end testing, gathered user feedback during beta testing, optimized performance, and deployed the app to production with monitoring in place for smooth operation.",
    },
  ];

  return (
    <section>
      <div className="w-full bg-black text-white py-20 flex justify-center">
        <div ref={containerRef} className="relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-gray-700 rounded-2xl" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-1 bg-linear-to-t from-blue-500 via-red-500 to-purple-500 rounded-2xl origin-top"
          />
          {timelineContent.map((item, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });
            return (
              <div
                key={index}
                ref={cardRef}
                className="flex items-start gap-2 mb-12 relative"
              >
                <div className="w-8 flex justify-center ml-0.5 -mt-3">
                  <div
                    className={`w-4 h-4 rounded-full z-10 border-2 transition-colors duration-500 ${
                       "bg-white border-black"
                    }`}
                  />
                </div>
                <motion.div
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : -60,
                  }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-lg w-96 "
                >
                  <h2 className="text-3xl font-serif capitalize">{item.title}</h2>
                  <p className="text-md font-normal opacity-80 mt-3">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}