import Reveal from "@/components/Reveal";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { PROFILE } from "@/data/profile";

const Education = () => {
  return (
    <section className="py-14" id="education">
      <div className="container mx-auto px-4">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Background</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Education &amp; <span className="text-gradient">certifications</span>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Education */}
          <Reveal className="card p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <FaGraduationCap size={20} />
              </span>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {PROFILE.education.map((e) => (
                <div
                  key={e.school}
                  className="border-l-2 border-border pl-4"
                >
                  <p className="text-xs font-medium text-primary">{e.period}</p>
                  <h4 className="mt-1 font-semibold">{e.school}</h4>
                  <p className="text-sm text-content-muted">{e.degree}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Certifications + languages */}
          <Reveal delay={0.1} className="card p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <FaCertificate size={18} />
              </span>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {PROFILE.certifications.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="mb-3 text-sm font-semibold text-content-muted">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {PROFILE.languages.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
