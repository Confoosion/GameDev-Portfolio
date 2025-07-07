import { useParams } from 'react-router-dom';

const projectDetails = {
  stationary: {
    title: 'Stationary',
    description: 'Work at a shipping company in this rogue-like game where the main goal is to organize boxes',
    images: ['/path/to/stationary1.png', '/path/to/stationary2.png'],
    videos: ['/path/to/stationary-demo.mp4']
  },
  markusMiasma: {
    title: 'Markus\'s Miasma',
    description: 'A fictional thriller puzzle game involving the UCSC campus',
    images: ['/path/to/boxsorter1.png'],
    videos: []
  },
  souperHero: {
    title: 'Souper Hero',
    description: 'Wander around in a rogue-like environment, making enemies into soups to use as your weapons',
    images: [],
    videos: []
  },
  // Add more project detail data
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) return <div className="pt-20 px-6">Project not found.</div>;

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="mb-6">{project.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {project.images.map((src, i) => (
          <img key={i} src={src} alt={`${project.title} ${i}`} className="rounded shadow" />
        ))}
      </div>
      {project.videos.map((src, i) => (
        <video key={i} controls className="w-full rounded shadow mb-4">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default ProjectDetail;
