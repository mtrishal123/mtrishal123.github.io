import { ImPointRight } from "react-icons/im";
import { MdSchool } from "react-icons/md";
import { experience, skills, education, profile } from "../data";

export default function About() {
  return (
    <div className="page">
      <section className="section">
        <div className="container about__grid">
          <div>
            <h1 className="page__title">
              Know who <span className="purple">I'M</span>
            </h1>
            <blockquote className="card quote">
              <p>
                Hi everyone, I'm <span className="purple">{profile.name}</span>, based in{" "}
                <span className="purple">{profile.location}</span>.
              </p>
              <p>
                I'm a software engineer with experience spanning cloud infrastructure, full-stack product
                development, and AI systems. I recently finished my Master's in Computer Science at Northeastern and
                interned at AdsGency AI, where I built reliability, AI, and security features across 8 ad platforms.
              </p>
              <p>Things I enjoy building:</p>
              <ul>
                <li><ImPointRight /> Fault-tolerant backends and APIs</li>
                <li><ImPointRight /> LLM, RAG, and agentic AI applications</li>
                <li><ImPointRight /> CI/CD and DevSecOps pipelines</li>
              </ul>
              <footer className="quote__footer">"{profile.tagline}"</footer>
            </blockquote>
          </div>
          <div className="card edu">
            <MdSchool className="edu__icon" />
            <h3>{education.school}</h3>
            <p className="purple">{education.degree}</p>
            <p className="muted">{education.period} · {education.location}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">
            Professional <span className="purple">Experience</span>
          </h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="timeline__item">
                <div className="card">
                  <div className="timeline__head">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="purple">{job.role}</p>
                    </div>
                    <div className="timeline__meta">
                      <span>{job.period}</span>
                      <span className="muted">{job.location}</span>
                    </div>
                  </div>
                  <ul className="bullets">
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">
            Professional <span className="purple">Skillset</span>
          </h2>
          <div className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills__group">
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">
            Days I <span className="purple">Code</span>
          </h2>
          <div className="card gh-chart">
            <img
              src={`https://ghchart.rshah.org/c770f0/${profile.githubUser}`}
              alt={`${profile.githubUser}'s GitHub contribution chart`}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
