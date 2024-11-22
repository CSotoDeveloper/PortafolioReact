import React from "react";
import courses from "../data/courses.json";

export default function Education() {
  return (
    <div className="" id="education">
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Educación
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mi Trayectoria Académica
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Universidad */}
            <div className="border border-blue-200 rounded-lg p-6 shadow-lg ">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                Universidad
              </h3>
              <div className="flex flex-col gap-6 mt-6">
                <div className="p-2 border border-blue-300 rounded-lg shadow-md shadow-blue-300 text-center">
                  <h4 className="text-lg font-semibold">
                  Ing. Industrial
                  </h4>
                  <p className="text-gray-700">Instituto Tecnológico Nacional de México (ITCM)</p>
                  <p className="text-sm text-gray-500">
                    (2019 - 2024)
                  </p>
                </div>
                <div className="p-4 border border-blue-300 rounded-lg shadow-md shadow-blue-300 text-center">
                  <h4 className="text-lg font-semibold">
                  Ing. Sistemas Computacionales
                  </h4>
                  <p className="text-gray-700"> Instituto Tecnológico Nacional de México (ITCM)</p>
                  <p className="text-sm text-gray-500">
                    (2018 - 2019)
                  </p>
                </div>
              </div>
            </div>

            {/* Cursos */}
            <div className="border border-blue-200 rounded-lg p-6 shadow-lg ">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">Cursos</h3>
              <div className="grid grid-cols-2 gap-6 mt-6">
                {courses.map((course) => (
                  <a
                    key={course.link}
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-blue-300 rounded-lg shadow-md shadow-blue-300 text-center hover:scale-110 transition"
                  >
                    <h4 className="text-lg font-semibold ">
                      {course.course}
                    </h4>
                    <p className=" text-gray-700"><span className="hidden sm:inline">Instructor: </span> {course.instructor}</p>
                    <p className="mb-2 text-sm text-gray-700"><span className="hidden sm:inline">Plataforma: </span>{course.platform}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
