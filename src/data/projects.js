import peakforceImage from "../assets/peakforce.png";
import PomodoroImage from "../assets/pomodoro.png";
import weatherImage from '../assets/weather.png';

const projects = [
  {
    title: "Weather App",
    imageSrc: weatherImage,
    description: "Muestra el clima actual de tu ciudad, el pronóstico de los próximos días y un gráfico detallado con las temperaturas a lo largo del día.",
    skills: ["React", "Tailwind", "Ts"],
    demo: "https://weather-app-di9k.vercel.app/",
    source: "https://github.com/CSotoDeveloper/WeatherApp",
  },
  {
    title: "Routine Gym Generator",
    imageSrc: peakforceImage,
    description: "Generador de rutinas personalizadas para personas principiantes según tu objetivo en el gym.",
    skills: ["REACT", "Tailwind"],
    demo: "https://gym-for-beginners-iu8bu5k5h-csotos-projects.vercel.app/",
    source: "https://github.com/CSotoDeveloper/GymForBeginners",
  },
  {
    title: "Pomodoro",
    imageSrc: PomodoroImage,
    description: "Un temporizador Pomodoro diseñado para mejorar tu productividad con intervalos de trabajo y descanso personalizables.",
    skills: ["HTML", "SASS", "JS", "CSS"],
    demo: "https://moradoro.netlify.app/",
    source: "https://github.com/CSotoDeveloper/Pomodoro",
  }
];

export default projects