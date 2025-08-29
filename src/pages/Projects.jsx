import { Link } from 'react-router-dom';

import stationaryThumb from '../assets/StationaryTemp.png';
import markusThumb from '../assets/markusMiasmaThumbnail.png';
import souperThumb from '../assets/SouperHeroTemp.png';
import tapper from '../assets/TapperThumbnail.png';

const projectData = [
  { id: 'stationary', title: 'Stationary', thumbnail: stationaryThumb },
  { id: 'tapper', title: 'Tapper', thumbnail: tapper },
  { id: 'markusMiasma', title: "Markus's Miasma", thumbnail: markusThumb },
  { id: 'souperHero', title: 'Souper Hero', thumbnail: souperThumb },
];

const Projects = ({ limit }) => {
  const data = limit ? projectData.slice(0, limit) : projectData;

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
          >
            {/* Uniform 16:9 thumbnail */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {limit && (
        <div className="mt-6 text-center">
          <Link to="/projects" className="underline hover:no-underline">
            See all projects →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;