import { Github, Globe } from "lucide-react";
import gitHubIcon from "../assets/githubIcon.png";

export default function Card({ item }) {
  return (
    <div className="border border-blue-500 rounded-lg w-[350px] lg:w-[400px] bg-blue-50">
      <img src={item.imageSrc} alt={item.title} className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2 text-center">{item.title}</h1>
        <p className="min-h-20">{item.description}</p>
        <div className="flex gap-3 mt-4 justify-center sm:justify-around">
          <button type="button" className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Globe className="mr-2" />
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
             Ver Proyecto
            </a>
          </button>
          <button type="button" className="bg-black text-white px-3 py-2 rounded-md flex items-center hover:scale-110 transition duration-300 ease-in-out">
            <img className="w-7 mr-2" src={gitHubIcon} alt="githubicon" />
            <a href={item.source} target="_blank" rel="noopener noreferrer">
               Ver Codigo
               </a>
          </button>
        </div>

      </div>
    </div>
  );
}
