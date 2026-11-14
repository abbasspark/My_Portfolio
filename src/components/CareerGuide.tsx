import {useMemo, useState} from "react";
import type {CSSProperties} from "react";
import {useSite} from "../i18n";
import type {Locale, Role, UiText, YearMonth} from "../types";
import "./CareerGuide.css";

/** Months since year 0, so two dates can be subtracted. */
function toMonths({year, month}: YearMonth): number {
  return year * 12 + (month - 1);
}

function formatMonth({year, month}: YearMonth, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric"
  }).format(new Date(year, month - 1, 1));
}

function formatPeriod(role: Role, locale: Locale, ui: UiText): string {
  const end = role.end ? formatMonth(role.end, locale) : ui.experience.present;
  return `${formatMonth(role.start, locale)} – ${end}`;
}

function formatYears(role: Role, ui: UiText): string {
  const end = role.end
    ? String(role.end.year).slice(2)
    : ui.experience.now.toLowerCase();
  return `${role.start.year}–${end}`;
}

/**
 * Career shown as a TV programme guide: one row per employer,
 * time running left to right, with a marker for today.
 */
export default function CareerGuide() {
  const {site, locale} = useSite();
  const {roles, ui} = site;
  const [selectedId, setSelectedId] = useState<string>(roles[0]?.id ?? "");

  const timeline = useMemo(() => {
    const today = new Date();
    const now: YearMonth = {
      year: today.getFullYear(),
      month: today.getMonth() + 1
    };
    const firstYear = Math.min(...roles.map(role => role.start.year));
    const axisStart = toMonths({year: firstYear, month: 1});
    // Leave a year of room after today so the "Now" marker is not at the edge.
    const axisEnd = toMonths({year: now.year + 2, month: 1});
    const span = axisEnd - axisStart;
    const percent = (date: YearMonth) =>
      ((toMonths(date) - axisStart) / span) * 100;

    const years: number[] = [];
    for (let year = firstYear; year <= now.year; year += 2) {
      years.push(year);
    }

    return {now, percent, years};
  }, [roles]);

  const selected = roles.find(role => role.id === selectedId) ?? roles[0];
  if (!selected) {
    return null;
  }

  return (
    <section className="section guide" id="experience">
      <div className="container">
        <h2 className="section__title">{ui.experience.title}</h2>
        <p className="section__lead">
          {ui.experience.lead}
          <span className="guide__hint"> {ui.experience.hint}</span>
        </p>

        <div
          className="guide__grid"
          role="group"
          aria-label={ui.experience.timelineLabel}
        >
          <div className="guide__axis" aria-hidden="true">
            {timeline.years.map(year => (
              <span
                key={year}
                className="guide__year"
                style={{left: `${timeline.percent({year, month: 1})}%`}}
              >
                {year}
              </span>
            ))}
          </div>

          <div className="guide__rows">
            <div className="guide__overlay" aria-hidden="true">
              <div
                className="guide__now"
                style={{left: `${timeline.percent(timeline.now)}%`}}
              >
                <span>{ui.experience.now}</span>
              </div>
            </div>

            {roles.map((role, index) => {
              const left = timeline.percent(role.start);
              const right = timeline.percent(role.end ?? timeline.now);
              const blockStyle: CSSProperties & {"--row": number} = {
                left: `${left}%`,
                width: `${right - left}%`,
                "--row": index
              };

              return (
                <div className="guide__row" key={role.id}>
                  <div className="guide__channel">
                    <img src={role.logo} alt="" width={40} height={40} />
                    <span>{role.company}</span>
                  </div>
                  <div className="guide__track">
                    <button
                      type="button"
                      className="guide__block"
                      style={blockStyle}
                      data-current={role.end ? undefined : "true"}
                      aria-pressed={role.id === selected.id}
                      aria-label={`${role.title}, ${role.company}, ${formatPeriod(role, locale, ui)}`}
                      onClick={() => setSelectedId(role.id)}
                    >
                      <span>{formatYears(role, ui)}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="guide__detail" aria-live="polite">
          <RoleDetail role={selected} />
        </div>

        {/* Small screens get the same content as a plain list. */}
        <ol className="guide__list">
          {roles.map(role => (
            <li key={role.id}>
              <RoleDetail role={role} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleDetail({role}: {role: Role}) {
  const {site, locale} = useSite();

  return (
    <article className="role">
      <header className="role__header">
        <img
          className="role__logo"
          src={role.logo}
          alt=""
          width={56}
          height={56}
        />
        <div>
          <h3 className="role__title">{role.title}</h3>
          <p className="role__meta">
            {role.company}, {role.location}
          </p>
          <p className="role__period">{formatPeriod(role, locale, site.ui)}</p>
        </div>
      </header>
      <div className="role__body">
        <p className="role__summary">{role.summary}</p>
        <ul className="role__highlights">
          {role.highlights.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {role.stack.length > 0 && (
          <ul className="tags" aria-label={site.ui.tagsLabel}>
            {role.stack.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
