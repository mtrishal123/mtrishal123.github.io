import Socials from "./Socials";
import { profile } from "../data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>Designed &amp; built by {profile.name}</p>
        <p>© {year} {profile.initials}</p>
        <Socials className="socials--small" />
      </div>
    </footer>
  );
}
