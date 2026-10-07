import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { profile } from "../data";

const links = [
  { to: "/", label: "Home", icon: <AiOutlineHome /> },
  { to: "/about", label: "About", icon: <AiOutlineUser /> },
  { to: "/projects", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
  { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          {profile.initials}
          <span className="purple">.</span>
        </NavLink>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.icon} {l.label}
            </NavLink>
          ))}
          <a className="btn btn--icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <BsGithub />
          </a>
        </nav>
      </div>
    </header>
  );
}
