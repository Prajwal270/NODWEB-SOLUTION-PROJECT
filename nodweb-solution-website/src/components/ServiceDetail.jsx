import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../constants/serviceData";
import { ArrowLeft } from "lucide-react";

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];

  if (!service) {
    return <div className="text-white p-10">Service not found</div>;
  }

  return (
    <div className="min-h-screen pt-10 bg-[#0B0F19] text-white">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-[#0B0F19] to-[#0E1424] pt-15 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition px-1.5 py-0.5 border border-gray-400/20 hover:border-gray-400/80 rounded-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {service.title}
          </h1>

          {/* Intro */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {service.intro}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur">
            {service.sections.map((section, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                  {section.heading}
                </h2>

                <p className="text-gray-300 leading-relaxed text-base sm:text-md">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
