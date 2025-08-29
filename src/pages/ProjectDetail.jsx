import { useParams } from 'react-router-dom';

// Helper to build privacy-friendly embeds
const yt = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;

/**
 * Project data:
 * - youtube: array of { id: 'YouTubeID', title?: 'Trailer / Demo' }
 * - images: array of image paths (imported into /public or served from /src via imports)
 *
 * NOTE: Keys here (stationary, markusMiasma, souperHero) must match the IDs used in Projects.jsx
 */

const projectDetails = {
  stationary: {
    title: 'Stationary',
    description: 'Work at a shipping company in this rogue-like game where the main goal is to organize boxes',
    images: ['/path/to/stationary1.png', '/path/to/stationary2.png'],
    youtube: [
      { id: '-B1Cr9GG3co', title: 'Trailer' },
      // { id: 'kXYiU_JCYtU', title: 'Gameplay Demo' },
    ],
  },
  markusMiasma: {
    title: 'Markus\'s Miasma',
    description: 'A fictional thriller puzzle game involving the UCSC campus',
    images: ['/path/to/boxsorter1.png'],
    youtube: [
      // { id: 'YOUR_VIDEO_ID', title: 'Trailer' },
    ],
  },
  souperHero: {
    title: 'Souper Hero',
    description: 'Wander around in a rogue-like environment, making enemies into soups to use as your weapons',
    images: [],
    youtube: [
      // { id: 'YOUR_VIDEO_ID', title: 'Trailer' },
    ],
  },
  tapper: {
    title: 'Tapper',
    description: 'A simple mobile game about tapping things on the screen.',
    images: [],
    youtube: [
      // { id: 'YOUR_VIDEO_ID', title: 'Trailer' },
    ],
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

      {/* YouTube embeds */}
      {project.youtube?.length > 0 && (
        <div className="space-y-6">
          {project.youtube.map((v, i) => (
            <div key={v.id ?? i} className="aspect-w-16 aspect-h-9">
              <iframe
                src={yt(v.id)}                       // 👈 builds https://www.youtube-nocookie.com/embed/<ID>
                title={`${project.title} – ${v.title ?? 'Video'} ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded shadow"
              />
            </div>
          ))}
        </div>
      )}

      {/* Images */}
      {project.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.images.map((src, i) => (
            <img key={i} src={src} alt={`${project.title} ${i + 1}`} className="rounded shadow" />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;