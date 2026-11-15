import {useSite} from "../i18n";
import "./About.css";

export default function About() {
  const {site} = useSite();
  const {about, ui} = site;

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__main">
          <h2 className="about__title">{ui.about.title}</h2>
          <p className="about__lead">{about.lead}</p>
          <div className="about__text">
            {about.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="about__path" aria-labelledby="about-path-title">
          <h3 className="about__path-title" id="about-path-title">
            {ui.about.path}
          </h3>
          <ol className="about__stops">
            {about.stops.map((stop, index) => (
              <li
                key={stop.period}
                className="about__stop"
                data-current={
                  index === about.stops.length - 1 ? "true" : undefined
                }
              >
                <p className="about__period">{stop.period}</p>
                <p className="about__place">{stop.place}</p>
                <p className="about__focus">{stop.focus}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
