import SkillRating from "@/components/SkillRating";
import Reveal from "@/components/Reveal";
import { PROFILE } from "@/data/profile";

const Skills = () => {
  return (
    <section className="py-14" id="skills">
      <div className="container mx-auto px-4">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Skills</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Built for <span className="text-gradient">scale &amp; speed</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-content-muted">
            {PROFILE.summaryShort}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Proficiency bars */}
          <Reveal className="card p-6">
            <h3 className="mb-6 text-lg font-semibold">Core proficiency</h3>
            <div className="space-y-5">
              {PROFILE.topSkills.map((skill) => (
                <SkillRating
                  key={skill.name}
                  name={skill.name}
                  rating={skill.level}
                />
              ))}
            </div>
          </Reveal>

          {/* Tech stack cloud */}
          <Reveal delay={0.1} className="card p-6">
            <h3 className="mb-6 text-lg font-semibold">Tech stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {PROFILE.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="mb-3 text-sm font-semibold text-content-muted">
                Top skills
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {["Team Leadership", "Redux.js", "AWS"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {s}
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

export default Skills;
