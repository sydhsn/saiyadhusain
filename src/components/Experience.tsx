import Reveal from "@/components/Reveal";
import { PROFILE } from "@/data/profile";

const Experience = () => {
  return (
    <section className="py-14" id="experience">
      <div className="container mx-auto px-4">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Experience</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A decade of <span className="text-gradient">shipping at scale</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />

          <div className="space-y-8">
            {PROFILE.experience.map((job, i) => (
              <Reveal
                key={job.company}
                delay={i * 0.05}
                className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:ml-auto md:pl-12 md:text-left"
                    : "md:mr-auto md:pr-12 md:text-right"
                }`}
              >
                {/* Dot */}
                <span
                  className={`absolute left-4 top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-canvas ${
                    job.current ? "bg-accent" : "bg-primary"
                  } md:left-auto ${i % 2 === 0 ? "md:-left-6" : "md:-right-6 md:left-auto md:translate-x-1/2"}`}
                />
                <div className="card p-6 transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="chip !border-primary/40 !bg-primary/10 !text-primary">
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold">{job.role}</h3>
                  <p className="font-medium text-primary">{job.company}</p>
                  <p className="mt-2 text-sm text-content-muted">{job.note}</p>
                  <p className="mt-2 text-xs text-content-muted">📍 {job.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
