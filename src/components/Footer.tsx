import { FaLinkedin, FaGithub, FaWhatsapp, FaLink } from "react-icons/fa";
import { PROFILE } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
      <span className="text-lg font-bold text-gradient">{PROFILE.name}</span>
      <p className="max-w-md text-sm text-content-muted">{PROFILE.role}</p>
      <div className="flex gap-3">
        {[
          { href: PROFILE.links.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
          { href: PROFILE.links.github, icon: <FaGithub />, label: "GitHub" },
          { href: PROFILE.links.whatsapp, icon: <FaWhatsapp />, label: "WhatsApp" },
          { href: PROFILE.links.linktree, icon: <FaLink />, label: "Linktree" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-content-muted transition-colors hover:border-primary hover:text-primary"
          >
            {l.icon}
          </a>
        ))}
      </div>
      <p className="mt-2 text-xs text-content-muted">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Tailwind.
      </p>
    </div>
  </footer>
);

export default Footer;
