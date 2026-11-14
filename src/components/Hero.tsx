import {useSite} from "../i18n";
import "./Hero.css";

export default function Hero() {
  const {site} = useSite();
  const {profile, ui} = site;

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__role">
            {profile.name}, {profile.jobTitle}
          </p>
          <h1 className="hero__headline">{profile.headline}</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              {ui.hero.contactMe}
            </a>
            <a
              className="button button--secondary"
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
            >
              {ui.hero.viewCv}
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>{ui.hero.basedIn}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>{ui.hero.openTo}</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div>
              <dt>{ui.hero.languages}</dt>
              <dd>{profile.languages.join(", ")}</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__photo">
          <img
            src={profile.photo}
            alt={ui.hero.photoAlt}
            width={720}
            height={864}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
