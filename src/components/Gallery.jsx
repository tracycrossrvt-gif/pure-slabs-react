import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery__header">
          <div>
            <p className="section__eyebrow">Featured Work</p>

            <h2 className="section__title">
              Built to suit the material, the space, and the people using it.
            </h2>
          </div>

          <p className="section__text">
            Each piece is shaped by the wood itself and customized around the
            needs of the client.
          </p>
        </div>

        <div className="gallery__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;