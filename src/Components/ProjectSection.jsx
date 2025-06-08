import { ArrowRight, ExternalLink, GithubIcon, PhoneCall } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Website",
    description: " A beautiful landing pages using React Js",
    image: "/Projects/Project1.jpg",
    tags: ["React", "tailwindCSS", "Javascript"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Tech website",
    description: " A cool landing pages using React Js",
    image: "/Projects/Project2.jpg",
    tags: ["React", "tailwindCSS", "Javascript"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 1,
    title: "Travel website",
    description: " A landing pages using Html CSS & JS",
    image: "/Projects/project3.jpg",
    tags: ["React", "tailwindCSS", "Javascript"],
    demoURL: "#",
    githubURL: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">
          {" "}
           Featured <span className="text-primary font-bold"> Projects </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my Projects. Each project was carefully crafted with
          Attention to details, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg  overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground border">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {""}
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubURL} target="_blank">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/AmitSharma404"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={20} className="" />
          </a>
        </div>
      </div>
    </section>
  );
};
