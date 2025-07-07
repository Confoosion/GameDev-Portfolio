import { Link } from 'react-router-dom';

const projectData = [
  { id: 'stationary', title: 'Stationary', thumbnail: '/path/to/stationary-thumb.png' },
  { id: 'markusMiasma', title: 'Markus\'s Miasma', thumbnail: '/path/to/box-sorter-thumb.png' },
  { id: 'souperHero', title: 'Souper Hero', thumbnail: '/path/to/souperHero.png'},

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectData.map(project => (
          <Link 
            key={project.id}
            to={`/projects/${project.id}`}
            className="block bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden shadow-md"
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
