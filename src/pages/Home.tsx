import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Typewriter from "../components/Typewriter";
import Socials from "../components/Socials";
import { profile } from "../data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <h1 className="hero__hi">
              Hi there! <span className="wave" role="img" aria-label="waving hand">👋🏻</span>
            </h1>
            <h1 className="hero__name">
              I'm <strong className="purple">{profile.name.toUpperCase()}</strong>
            </h1>
            <p className="hero__type">
              <Typewriter words={profile.roles} />
            </p>
            <div className="hero__cta">
              <Link to="/projects" className="btn">View my work</Link>
              <a href={profile.resume} className="btn btn--ghost" download>
                <AiOutlineDownload /> Resume
              </a>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="monogram">
              <span>{profile.initials}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro__grid">
          <div>
            <h2 className="section__title">
              Let me <span className="purple">introduce</span> myself
            </h2>
            <div className="intro__body">
              <p>
                I'm Trishal, a software engineer who loves building products that are{" "}
                <b className="purple">scalable, reliable, and secure</b>. I've spent 4+ years across enterprise
                infrastructure at IBM, full-stack product work at a healthtech startup, and most recently AI-powered
                ad tooling at AdsGency AI.
              </p>
              <p>
                My core stack includes{" "}
                <i>
                  <b className="purple">TypeScript, React, Node.js, Python, Flask, Redis, PostgreSQL, AWS, Docker and Kubernetes</b>
                </i>
                , and I care a lot about the unglamorous parts: idempotency, failure modes, CI/CD, and shifting
                security left.
              </p>
              <p>
                Lately I've been deep into{" "}
                <i>
                  <b className="purple">agentic AI, RAG, and LLM-driven workflows</b>
                </i>{" "}
                — building systems where models and real-world infrastructure meet.
              </p>
              <p>
                I hold an <b className="purple">MS in Computer Science from Northeastern University</b> and I'm
                looking for full-time software engineering roles across backend, full-stack, and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section connect">
        <div className="container">
          <h2 className="section__title">Find me on</h2>
          <p>
            Feel free to <span className="purple">connect</span> with me
          </p>
          <Socials />
        </div>
      </section>
    </>
  );
}
