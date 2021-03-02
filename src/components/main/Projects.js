import React from "react";
import projects from "../../data/projects";
import Layout from "../layout/Layout";
import Animate from "../animate/Animations";
import Gallery from "./Gallery";

export default function Projects() {
  return (
    <Layout>
      <div id="projects">
        <Animate>
          <h1 className="projects__title">Projects</h1>
        </Animate>
        <div className="projects__grid">
          {projects &&
            projects.map((project) => (
              <Gallery project={project} key={project.id} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
