import ContactForm from "@/components/ContactForm";
import QuickConnect from "./QuickConnect";

const Contact = () => {
  return (
    <section id="contact" className="py-2">
      <div className="container mx-auto px-4">
        <p className="text-lg text-center mb-2">Contact Me</p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          {/* Right: QuickConnect */}
          <div className="w-full md:w-1/2">
            <QuickConnect />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
