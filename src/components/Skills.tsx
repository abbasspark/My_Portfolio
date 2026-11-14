import {useSite} from "../i18n";
import "./Skills.css";

export default function Skills() {
  const {site} = useSite();

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section__title">{site.ui.skills.title}</h2>
        <p className="section__lead">{site.ui.skills.lead}</p>
        <dl className="skills">
          {site.skillGroups.map(group => (
            <div className="skills__row" key={group.area}>
              <dt>{group.area}</dt>
              <dd>
                <ul>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
