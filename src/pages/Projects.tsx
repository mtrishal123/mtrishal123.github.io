import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="page__title">
            My Recent <span className="purple">Works</span>
          </h1>
          <p className="page__lede">Here are a few projects I've worked on recently.</p>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="card project">
                <div className="project__head">
                  <h3>{p.title}</h3>
                  <span className="muted">{p.date}</span>
                </div>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => <span key={t} className="chip chip--sm">{t}</span>)}
                </div>
                {(p.github || p.demo) && (
                  <div className="project__links">
                    {p.github && (
                      <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                        <BsGithub /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a className="btn btn--ghost" href={p.demo} target="_blank" rel="noreferrer">
                        <CgWebsite /> Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
