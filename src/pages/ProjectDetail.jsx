import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Build a privacy-friendly embed URL from a YouTube ID
const yt = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;

/** ───────────── EDIT YOUR CONTENT HERE ───────────── **/
const projectDetails = {
  stationary: {
    title: 'Stationary',
    description:
      'Work at a shipping company in this rogue-like game where the main goal is to organize boxes.',
    youtube: [
      { id: '-B1Cr9GG3co', title: 'Trailer' }, // 👈 just the ID from youtu.be/<ID>
    ],
    images: [
      // Option A (public folder): '/assets/stationary1.png',
      // Option B (imports): import at top & put the variable here
    ],
    tech: ['GDevelop'],
    links: [
      { label: 'Game Link', href: 'https://gd.games/jakesales/stationary-gi9' },
    ],
    details: [
      {
        heading: 'Inspiration',
        text: [
          'During this time, I was really into Rogue-likes such as Risk of Rain 2 and simulation games which simulated working at grocery stores.',
          'This game was ideated from me and a friend towards a college Game Dev project, which took a little under a month to make.',
        ]
      },
      {
        heading: 'Development',
        text: [
          'This project was built in GDevelop, which is a game engine similar to Scratch. It first began as a prototype with boxes. I wanted to perfect the mechanics of inspecting and moving the boxes, and make sure it was fun before moving on to the rest of the game.',
          'We ideated the types of details a box would have to give it a distinct identity different from other boxes. We were new to GDevelop, so we made it very simple and focused on only a few details for the boxes: A color splash, bar code, ID, and the tape orientation.',
          'Each box would have one of every detail, but each detail would have 3 varieties, which was what we planned for since the way we organized boxes was to put them in 3 different carts. The carts would require a theme (a box detail) each shift, and those 3 carts would have the varieties. For example, a theme could be color splash and the carts would require either blue, red, or green.',
          'Spawning the boxes was similar to that of a prefab in Unity, so it was pretty simple to spawn multiple per round. My friend was more focused on the art, while I was focused on the coding and design portion, which allowed me to have a clear idea on what the game should look like and how things should flow.'
        ]
      },
      {
        heading: 'What I Learned',
        text: [
          'Early prototyping of modifiers helped catch balance issues and reduced late-stage rework.',
          'Collaboration is important, especially when it comes to 2 different departments (art and design).',
        ]
      },
    ],
  },

  markusMiasma: {
    title: "Markus's Miasma",
    description: 'A fictional thriller puzzle game involving the UCSC campus.',
    youtube: [
      { id: 'xxYVIywezPc', title: 'Trailer' },
      // https://youtu.be/xxYVIywezPc?si=dA_qEHjoCqf7e_f-
    ],
    images: [],
    tech: ['Unity', 'C#', 'Github', 'Taiga'],
    links: [
      { label: 'Steam Page', href: 'https://store.steampowered.com/app/3674920/Markuss_Miasma/' }
    ],
    details: [
      { heading: 'Inspiration',
        text: [
          'This game was made for a college class, CMPM 171, with a team of 8. We ideated a bunch of game ideas and landed on an idea of a 2D horror, mystery, puzzle game based on the UCSC campus.',
          'We wanted to base our fantasy story on our professor, Markus Eger, because we thought it would be a silly concept about him being an evil scientist.'
        ]
      },
      { heading: 'Design',
        text: [
          'I worked on the first real puzzle area for the game. It was based on the McHenry library building at UCSC and we decided to infest the area with mutant deers who are very protective of their territory.',
          'This portion of the game was meant to teach you about the deer mechanics and how they only chase you within a certain radius, and that you can dodge and maneuver around them with precise movement. We also came up with stories behind each location, so for the main conflict of McHenry Library, a friendly, Dapper Deer wouldn\'t let us into the library building unless we brought him a cup of tea.',
          'The deer would move based on a 2D Navmesh we created for the whole area of McHenry, and would only chase the player once they were in the deer\s nest area which was basically a fixed radius around a specific point in the world. We were able to easily change the radius\'s range for each deer using prefabs which saved us a lot of time when it came to debugging the deer behavior.',
          'Level design feels a lot like a story, so it needs an introduction where the player will begin and learn about the area. Then it needs the conflict which in this case is the Dapper Deer and his tea. And finally, its conclusion of accessing the library to obtain some notes on the story and unlocking new locations.'
        ]
      },
    ],
  },

  souperHero: {
    title: 'Souper Hero',
    description:
      'Wander around in a rogue-like environment, making enemies into soups to use as your weapons.',
    youtube: [
      { id: 'eS0_EcyCiJI', title: 'Trailer'},
    ],
    images: [],
    tech: ['Unity', 'C#', 'Github', 'Notion', 'Steam'],
    links: [],
    details: [
      { heading: 'Late Join',
        text: [
          'This project was going on at the same time I was working on Markus\s Miasma, so in the next class, CMPM 172, I decided to join a larger team and work on Souper Hero. I was given a quick briefing on what has been done and what needed to be done, along with the steps of how things were done.',
        ]
      },
      { heading: 'Front-End Development',
        text: [
          'I was tasked with working on the settings menu for the game. This was my first time actually doing anything settings related, so it was new and a great learning experience for what settings are generally important for a game. Keybinds were the setting that I focused on the most because figuring out how to get the scroll wheel to work for keybinds in Unity is shockingly difficult.',
          'I had to essentially rework the code for the actions because the previous code didn\'t account for rebinding.',
          'I also lightly worked on graphic and audio settings which I learned was easier than I was expecting.'
        ]
      },
      {
        heading: 'Cosmetics and Achievements',
        text: [
          'Near the end of the class, I was tasked with working towards the Steam Achievements and cosmetics for the character. There were discussions about how we would change the character such as changing the clothing, colors, and weapon but due to our low time we could only afford to have the colors change.',
          'A colleague had helped setup some shaders to allow me to create sets of cosmetics which were basically just themed reskins of the character, but the way the player could unlock them was through Steam Achievements. Working through the Steamworks was really interesting because of how easy it was to add in achievements and to get it working within the game. Once an achievement was earned, the corresponding cosmetic would unlock.',
          'The player would be able to change their cosmetics through the main menu in a new little UI I created to bring up the cosmetics menu. Within the cosmetics menu, the player would also be able to see which cosmetics were locked, unlocked, how to unlock certain cosmetics, see which one was equipped, along with seeing a preview of the cosmetic on the character.'
        ]
      },
    ],
  },
};
/** ───────────── END EDIT ZONE ───────────── **/

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) return <div className="pt-20 px-6">Project not found.</div>;

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto pb-32">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <HashLink
        smooth
        to="/#projects"
        className="text-sm underline hover:no-underline mt-2 shrink-0"
        >
          ← Back to Projects
        </HashLink>
      </div>
      <p className="mt-3 mb-6 text-gray-200">{project.description}</p>

      {/* YouTube videos */}
      {project.youtube?.length > 0 && (
        <div className="space-y-6 mb-8">
          {project.youtube.map((v, i) => (
            <div key={v.id ?? i} className="aspect-w-16 aspect-h-9">
              <iframe
                src={yt(v.id)}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      )}

      {/* Tech badges */}
      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-gray-700/70 px-2 py-1 rounded border border-gray-600/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* External links */}
      {project.links?.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {project.links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Structured sections (headings + paragraphs) */}
      {project.details?.length > 0 && (
        <div className="space-y-8">
          {project.details.map((sec, i) => (
            <section key={i}>
              <h3 className="text-xl font-semibold mb-2">{sec.heading}</h3>
              {Array.isArray(sec.text) ? (
                <div className="space-y-3">
                  {sec.text.map((para, idx) => (
                    <p key={idx} className="text-gray-200 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-200 leading-relaxed">{sec.text}</p>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
