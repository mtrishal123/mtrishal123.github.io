import { AiOutlineDownload } from "react-icons/ai";
import { profile } from "../data";

export default function Resume() {
  return (
    <div className="page">
      <section className="section">
        <div className="container resume">
          <a className="btn" href={profile.resume} download>
            <AiOutlineDownload /> Download CV
          </a>
          <object data={profile.resume} type="application/pdf" className="resume__frame" aria-label="Resume">
            <p>
              Your browser can't display the PDF inline.{" "}
              <a className="purple" href={profile.resume}>Open the resume</a> instead.
            </p>
          </object>
        </div>
      </section>
    </div>
  );
}
