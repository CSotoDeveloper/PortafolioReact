import { Briefcase } from "lucide-react";

const ExperienceItem = ({ item }) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white">
        <Briefcase color="white" />
      </span>

      <div className="p-4 border border-blue-200 rounded-lg shadow-md bg-white">
        <h3 className="text-lg font-semibold text-gray-900">
          {item.role}, {item.organisation}
        </h3>
        <p className="text-sm text-gray-600">
          {item.startDate} - {item.endDate}
        </p>
        <div className="mt-4 space-y-4">
          {item.experiences.map((experience) => (
            <div key={experience} className="bg-gray-100 p-2 rounded-md shadow-sm">
              <p className="text-gray-700">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
