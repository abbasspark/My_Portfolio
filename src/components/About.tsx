import {useSite} from "../i18n";
import "./About.css";

export default function About() {
  const {site} = useSite();

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <h2 className="section__title">{site.ui.about.title}</h2>
        <div className="about__text">
          {site.about.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
