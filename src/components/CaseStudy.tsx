import {useSite} from "../i18n";
import type {CaseStudy as CaseStudyContent} from "../types";
import "./CaseStudy.css";

export default function CaseStudy() {
  const {site} = useSite();
  const {caseStudy, ui} = site;

  return (
    <section className="section case" id="case-study">
      <div className="container">
        <p className="case__kind">
          {ui.caseStudy.prefix}: {caseStudy.kind}
        </p>
        <h2 className="section__title">{caseStudy.name}</h2>

        <div className="case__intro">
          <div>
            <p className="case__lead">{caseStudy.lead}</p>
            <h3 className="case__heading">{ui.caseStudy.problem}</h3>
            <p>{caseStudy.problem}</p>
            <a
              className="text-link case__link"
              href={caseStudy.link.url}
              target="_blank"
              rel="noreferrer"
            >
              {caseStudy.link.label}
            </a>
          </div>
          <figure className="case__figure">
            <img
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <h3 className="case__heading">{ui.caseStudy.built}</h3>
        <dl className="case__parts">
          {caseStudy.parts.map(part => (
            <div className="case__part" key={part.title}>
              <dt>{part.title}</dt>
              <dd>{part.description}</dd>
            </div>
          ))}
        </dl>

        <h3 className="case__heading">{ui.caseStudy.fit}</h3>
        <div className="case__diagram" tabIndex={0}>
          <ArchitectureDiagram diagram={caseStudy.diagram} />
        </div>
        <p className="case__caption">{caseStudy.caption}</p>

        <h3 className="case__heading">{ui.caseStudy.decisions}</h3>
        <ul className="case__decisions">
          {caseStudy.decisions.map(decision => (
            <li key={decision.title}>
              <h4>{decision.title}</h4>
              <p>{decision.description}</p>
            </li>
          ))}
        </ul>

        <div className="case__footer">
          <div>
            <h3 className="case__heading case__heading--flush">
              {ui.caseStudy.builtWith}
            </h3>
            <ul className="tags" aria-label={ui.tagsLabel}>
              {caseStudy.stack.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="case__facts-note">{caseStudy.factsNote}</p>
            <dl className="case__facts">
              {caseStudy.facts.map(fact => (
                <div key={fact.label}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BoxProps {
  x: number;
  title: string;
  subtitle: string;
  items: string[];
}

const BOX_WIDTH = 260;
const GAP = 110;
const BOX_HEIGHT = 250;
const BOX_TOP = 20;

function DiagramBox({x, title, subtitle, items}: BoxProps) {
  return (
    <g>
      <rect
        className="diagram__box"
        x={x}
        y={BOX_TOP}
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        rx={6}
      />
      <text className="diagram__title" x={x + 20} y={BOX_TOP + 34}>
        {title}
      </text>
      <text className="diagram__subtitle" x={x + 20} y={BOX_TOP + 56}>
        {subtitle}
      </text>
      {items.map((item, index) => (
        <g key={item}>
          <rect
            className="diagram__item"
            x={x + 20}
            y={BOX_TOP + 76 + index * 40}
            width={BOX_WIDTH - 40}
            height={30}
            rx={4}
          />
          <text
            className="diagram__label"
            x={x + 32}
            y={BOX_TOP + 96 + index * 40}
          >
            {item}
          </text>
        </g>
      ))}
    </g>
  );
}

function Arrow({
  x,
  y,
  label,
  both
}: {
  x: number;
  y: number;
  label: string;
  both?: boolean;
}) {
  const end = x + GAP;
  return (
    <g>
      <line className="diagram__line" x1={x + 6} y1={y} x2={end - 6} y2={y} />
      <path
        className="diagram__head"
        d={`M${end - 6} ${y - 5} L${end + 2} ${y} L${end - 6} ${y + 5} Z`}
      />
      {both && (
        <path
          className="diagram__head"
          d={`M${x + 6} ${y - 5} L${x - 2} ${y} L${x + 6} ${y + 5} Z`}
        />
      )}
      {label.split("\n").map((line, index) => (
        <text
          key={line}
          className="diagram__note"
          x={x + GAP / 2}
          y={y - 26 + index * 14}
          textAnchor="middle"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ArchitectureDiagram({
  diagram
}: {
  diagram: CaseStudyContent["diagram"];
}) {
  return (
    <svg
      className="diagram"
      viewBox="0 0 1000 290"
      role="img"
      aria-label={diagram.label}
    >
      <DiagramBox x={0} {...diagram.licensing} />
      <Arrow x={260} y={145} label={diagram.checkIn} both />
      <DiagramBox x={370} {...diagram.operator} />
      <Arrow x={630} y={145} label={diagram.video} />
      <DiagramBox x={740} {...diagram.viewers} />
    </svg>
  );
}
