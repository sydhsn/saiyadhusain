import ContactForm from "@/components/ContactForm";
import QuickConnect from "./QuickConnect";
import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-4">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Get in <span className="text-gradient">touch</span>
          </h2>
        </Reveal>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <QuickConnect />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
