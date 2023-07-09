import { projects } from "lib/projects";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div className="grid gap-y-[3rem] sm:grid-cols-2">
      {projects.map((project) => {
        const { body_text, github_link, hashtags, project_name, website_link } =
          project;

        return (
          <ProjectCard
            body_text={body_text}
            github_link={github_link}
            hashtags={hashtags}
            project_name={project_name}
            website_link={website_link}
          />
        );
      })}
    </div>
  );
};

export default Projects;
