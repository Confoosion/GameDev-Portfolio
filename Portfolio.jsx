import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stationary",
    description:
      "A Unity2D game focused on organizational efficiency and dynamic rule-based gameplay.",
    tech: ["C#", "Unity", "Git"],
    github: "https://github.com/your-username/stationary",
    demo: "https://your-demo-link.com/stationary"
  },
  {
    title: "Pixel Painter",
    description:
      "A browser-based pixel art tool made in React with downloadable exports.",
    tech: ["React.js", "Canvas API"],
    github: "https://github.com/your-username/pixel-painter",
    demo: "https://your-demo-link.com/pixel-painter"
  }
];

export default function Portfolio() {
  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Jake Sales – Game Developer</h1>
      <p className="text-lg text-muted-foreground mb-12">
        I’m an undergrad at UC Santa Cruz studying Computer Science: Game Design.
        Here's a showcase of my game projects, tools, and experiments.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
