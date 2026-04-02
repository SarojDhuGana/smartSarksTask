import { useState } from "react";
import { motion } from "framer-motion";
const services = [
  {
    id: 1,
    category: "Web Development",
    imageSrc: "/public/frontend.gif",
    imageAlt: "frontend",
    title: "Frontend Development",
    description: "Build responsive and interactive web interfaces using modern frameworks like React, Vue, or Angular. Ensure smooth user experience, mobile optimization, and visually appealing layouts tailored to your brand."
  },
  {
    id: 2,
    category: "Web Development",
    imageSrc: "/public/backend.gif",
    imageAlt: "backend",
    title: "Backend Development",
    description: "Create robust backend systems and APIs with scalable architectures. Work with databases, authentication, and server-side logic to power your web and mobile applications efficiently."
  },
  {
    id: 3,
    category: "Design",
    imageSrc: "/public/design.gif",
    imageAlt: "design",
    title: "UI/UX Design",
    description: "Design user-friendly interfaces and engaging experiences that make navigation intuitive. Focus on wireframing, prototyping, and visual design to turn ideas into functional and aesthetically pleasing products."
  },
  {
    id: 4,
    category: "Marketing",
    imageSrc: "/public/SEO-team.gif",
    imageAlt: "seo",
    title: "SEO Optimization",
    description: "Boost your website’s visibility on search engines by optimizing on-page elements, keywords, and technical SEO. Drive organic traffic, improve search rankings, and enhance your online presence."
  },
  {
    id: 5,
    category: "Marketing",
    imageSrc: "/public/digitalMarketing.gif",
    imageAlt: "digital marketing",
    title: "Social Media Marketing",
    description: "Engage and grow your audience on social media platforms through strategic campaigns. Create compelling content, manage ads, analyze performance, and build brand awareness effectively."
  },
];

const categories = ["All", "Web Development", "Design", "Marketing"];

export default function Service() {
  const [category, setCategory] = useState("All");
  const filteredServices =
    category === "All"
      ? services
      : services.filter((service) => service.category === category);

  return (
    <section className="py-16 bg-gray-100">
      <div className="px-6">
      <h2 className="text-6xl font-bold mb-2">Our Services</h2>
      <p className="text-2xl font-semibold text-gray-800 mb-8">
  Discover our wide range of services crafted to help your business thrive. 
  From strategic planning and digital solutions to marketing and operational support, 
  we provide the expertise and tools to drive growth, efficiency, and lasting success.
   </p> 
        <div className="flex justify-start gap-8 mb-6">
          {categories.map((catageory) => (
            <button
              key={catageory}
              onClick={() => setCategory(catageory)}
              className={`px-2 py-2 font-semibold text-xl border-b-2 transition-colors duration-300 w-auto ${
                category === catageory
                  ? " text-black border-blue-700 rounded"
                  : " text-gray-800 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {catageory}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 w-full">
  {filteredServices.map((service) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition duration-300 border-2 border-blue-500"
    >
      <img
        src={service.imageSrc}
        alt={service.imageAlt}
        className="w-full h-96 object-cover rounded-2 mb-4"
      />
      <h3 className="text-3xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-xl flex justify-center font-sans">
        {service.description}
      </p>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}