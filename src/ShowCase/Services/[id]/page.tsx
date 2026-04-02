import { useParams, Link } from "react-router-dom";
import { services } from "../page";

const serviceDetails = [
  {
    id: 1,
    tools: ["React", "Vue", "Angular", "Redux", "Zustand"],
    duration: "3-6 months",
    complexity: "Medium"
  },
  {
    id: 2,
    tools: ["Node.js", "Express", "Django", "Laravel", "AWS", "PostgreSQL"],
    duration: "4-8 months",
    complexity: "High"
  },
  {
    id: 3,
    tools: ["Figma", "Adobe XD", "Sketch"],
    duration: "2-5 months",
    complexity: "Medium"
  },
  {
    id: 4,
    tools: ["Google Analytics", "SEMRush", "Ahrefs"],
    duration: "Ongoing",
    complexity: "Medium"
  },
  {
    id: 5,
    tools: ["Facebook Ads", "Instagram Ads", "LinkedIn Campaign Manager"],
    duration: "Ongoing",
    complexity: "Medium"
  }
];
export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));
  const details= serviceDetails.find((sid)=> sid.id === Number(id))

  if (!service || !details)
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link
          to="/service"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go Back to Services
        </Link>
      </div>
    );

  return (
    <section className="p-10 bg-gray-100 min-h-screen flex flex-col items-start w-full border-2 border-black">
    <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
    <h1 className="text-xl font-semibold mb-4">{service.overView}</h1>
    <div className="w-full flex gap-5 justify-center mb-5">
     <img
        src={service.imageSrc}
        alt={service.imageAlt}
        className="max-w-4xl object-cover rounded-2xl mb-2"
      />
<div className="bg-linear-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 p-5">
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tools & Technologies</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {details.tools.map((tool, index) => (
            <span key={index} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
      <div className="shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Duration</p>
        <p className="text-gray-800 font-medium mt-0.5">{details.duration}</p>
      </div>
    </div>

    <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
      <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Complexity</p>
        <div className="mt-1">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            details.complexity === 'High' ? 'bg-red-100 text-red-800' :
            details.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {details.complexity}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-full text-start">
  {service.description}
</p>
<Link
  to="/service"
  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg 
             transition-all duration-200 ease-in-out 
             hover:bg-blue-700 hover:shadow-md hover:-translate-y-px
             active:translate-y-0 active:shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  Back to Services
</Link>
    </section>
  );
}