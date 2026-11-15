import {useSite} from "../i18n";
import "./Hero.css";

export default function Hero() {
  const {site} = useSite();
  const {profile, roles, ui} = site;
  const currentRole = roles.find(role => !role.end);

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__role">
              {profile.name}, {profile.jobTitle}
            </p>
            <h1 className="hero__headline">{profile.headline}</h1>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <a className="button hero__primary" href="#contact">
                {ui.hero.contactMe}
              </a>
              <a
                className="button hero__secondary"
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
            {currentRole && (
              <figcaption className="hero__now">
                <span className="hero__now-label">
                  <span className="hero__now-dot" aria-hidden="true" />
                  {ui.hero.now}
                </span>
                <span className="hero__now-title">{currentRole.title}</span>
                <span className="hero__now-company">{currentRole.company}</span>
              </figcaption>
            )}
          </figure>
        </div>

        <dl className="hero__stats">
          {profile.stats.map(stat => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
