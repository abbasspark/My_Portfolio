import {useSite} from "../i18n";
import "./Credentials.css";

export default function Credentials() {
  const {site} = useSite();

  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section__title">{site.ui.credentials.title}</h2>
        <ul className="credentials">
          {site.credentials.map(item => (
            <li className="credentials__item" key={item.title}>
              <img
                src={item.logo}
                alt=""
                width={56}
                height={56}
                loading="lazy"
              />
              <div>
                <h3 className="credentials__title">{item.title}</h3>
                <p className="credentials__meta">
                  {item.issuer}, {item.period}
                </p>
                {item.link && (
                  <a
                    className="text-link"
                    href={item.link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
