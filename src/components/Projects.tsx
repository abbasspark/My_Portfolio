import {useSite} from "../i18n";
import "./Projects.css";

export default function Projects() {
  const {site} = useSite();
  const {ui, products, sideProjects} = site;

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title">{ui.projects.title}</h2>
        <p className="section__lead">{ui.projects.lead}</p>

        <h3 className="projects__heading">{ui.projects.products}</h3>
        <ul className="products">
          {products.map(product => (
            <li className="products__item" key={product.name}>
              <p className="products__kind">{product.kind}</p>
              <h4 className="products__name">{product.name}</h4>
              <p className="products__text">{product.description}</p>
              <ul className="tags" aria-label={ui.tagsLabel}>
                {product.stack.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {product.link && (
                <a
                  className="text-link"
                  href={product.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {product.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <h3 className="projects__heading">{ui.projects.sideProjects}</h3>
        <ul className="side">
          {sideProjects.map(project => (
            <li className="side__item" key={project.name}>
              <h4 className="side__name">{project.name}</h4>
              <p className="side__text">{project.description}</p>
              <a
                className="text-link"
                href={project.link.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
