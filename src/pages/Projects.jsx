import { useState } from 'react';
import { Link } from 'react-router-dom';

// Thumbnails (import from src/assets)
import stationaryThumb from '../assets/StationaryTemp.png';
import markusThumb from '../assets/markusMiasmaThumbnail.png';
import souperThumb from '../assets/SouperHeroTemp.png';

// Add more projects to taste:
const ALL_PROJECTS = [
  { id: 'stationary',   title: 'Stationary',        thumbnail: stationaryThumb },
  { id: 'markusMiasma', title: "Markus's Miasma",   thumbnail: markusThumb },
  { id: 'souperHero',   title: 'Souper Hero',       thumbnail: souperThumb },
  // { id: 'tapper', title: 'Tapper', thumbnail: someThumb },
  // ...
];

/**
 * Props:
 * - initialLimit: number (how many to show at first, e.g., 4)
 * - inline: boolean (optional styling hints if you keep Projects elsewhere)
 */
const Projects = ({ initialLimit = ALL_PROJECTS.length }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? ALL_PROJECTS.length : Math.min(initialLimit, ALL_PROJECTS.length);
  const visible = ALL_PROJECTS.slice(0, visibleCount);

  const hasMore = ALL_PROJECTS.length > initialLimit;

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visible.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="block bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            {expanded ? 'Show less' : 'See all projects'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
