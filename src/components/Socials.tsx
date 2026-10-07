import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "../data";

const socialLinks = [
  { href: profile.github, label: "GitHub", icon: <AiFillGithub /> },
  { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: `mailto:${profile.email}`, label: "Email", icon: <MdEmail /> },
];

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <ul className={`socials ${className}`}>
      {socialLinks.map((s) => (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="socials__icon">
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
