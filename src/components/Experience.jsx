import history from "../data/history.json";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div id="experience">
      <div className="bg-gray-100 py-12">
        <div className=" min-w-7xl max-w-4xl mx-1 sm:mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Experiencia
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mi Historia Profesional
            </p>
          </div>
          <div className=" mt-12">
            <ol className="relative border-l border-blue-300">
              {history.map((job) => (
                <ExperienceItem key={job.role} item={job} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
