import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    category: "Web Development",
    imageSrc: "/frontend.gif",
    imageAlt: "frontend",
    title: "Frontend Development",
    overView: "Create responsive and interactive interfaces that engage users across all devices.",
    description:
      "Build responsive and interactive web interfaces using modern frameworks like React, Vue, or Angular. Focus on creating reusable components, implementing state management with tools like Redux or Zustand, and ensuring cross-browser compatibility. Optimize for accessibility (a11y) and performance, while integrating animations and responsive designs that adapt to all device sizes. Collaborate closely with designers to transform wireframes and prototypes into polished, production-ready user interfaces."
  },
  {
    id: 2,
    category: "Web Development",
    imageSrc: "/backend.gif",
    imageAlt: "backend",
    overView: "Develop robust and scalable backend systems and APIs for secure applications.",
    title: "Backend Development",
    description:
      "Create robust and scalable backend systems and APIs using technologies like Node.js, Express, Django, or Laravel. Handle server-side logic, database management (SQL or NoSQL), authentication, and authorization. Implement secure and efficient data storage, caching strategies, and RESTful or GraphQL APIs. Monitor performance, write automated tests, and deploy applications to cloud platforms such as AWS, Azure, or Google Cloud to ensure reliability and scalability."
  },
  {
    id: 3,
    category: "Design",
    imageSrc: "/design.gif",
    imageAlt: "design",
    overView: "Design intuitive interfaces and seamless user experiences that delight users.",
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces and experiences that delight users. Conduct user research, create personas, and map user journeys to understand needs and pain points. Build wireframes, interactive prototypes, and high-fidelity mockups using tools like Figma, Adobe XD, or Sketch. Focus on usability, accessibility, and visual hierarchy while ensuring a cohesive design system. Collaborate with developers to translate designs into functional interfaces."
  },
  {
    id: 4,
    category: "Marketing",
    imageSrc: "/SEO-team.gif",
    imageAlt: "seo",
    overView: "Boost website visibility and attract organic traffic with smart SEO strategies.",
    title: "SEO Optimization",
    description:
      "Improve your website’s visibility on search engines through strategic SEO practices. Conduct keyword research, optimize on-page content, meta tags, headings, and image alt texts. Enhance technical SEO including site speed, mobile responsiveness, XML sitemaps, structured data, and internal linking. Analyze website traffic, track search rankings, and implement strategies to increase organic traffic. Continuously monitor and refine SEO campaigns to achieve better engagement and higher conversion rates."
  },
  {
    id: 5,
    category: "Marketing",
    imageSrc: "/digitalMarketing.gif",
    imageAlt: "digital marketing",
    overView: "Engage audiences and grow your brand with targeted social media campaigns.",
    title: "Social Media Marketing",
    description:
      "Develop and manage strategic social media campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter. Create engaging content including graphics, videos, and posts tailored to your audience. Monitor analytics, track engagement, and optimize campaigns for higher reach and ROI. Manage paid advertising campaigns, target the right audience segments, and implement A/B testing. Build brand awareness, engage the community, and drive traffic to websites or landing pages through effective social media marketing strategies."
  }
];

const categories = ["All", "Web Development", "Design", "Marketing"];

export default function ServicePage() {
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
        </p>

        <div className="flex justify-start gap-8 mb-6">
          {categories.map((catageory) => (
            <button
              key={catageory}
              onClick={() => setCategory(catageory)}
              className={`px-2 py-2 font-semibold text-xl border-b-2 transition-colors duration-300 w-auto ${
                category === catageory
                  ? "text-black border-blue-700 rounded"
                  : "text-gray-800 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {catageory}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 w-full">
          {filteredServices.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
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
                <p className="text-gray-600 text-xl flex justify-start font-sans">
                  {service.overView}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { services };