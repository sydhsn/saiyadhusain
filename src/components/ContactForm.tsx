"use client";

import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Email Me
            </h3>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-600"
              required
            />
            <input
              {...register("email")}
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-600"
              required
            />
            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-600"
              rows={5}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#3345A4] text-white p-2 rounded hover:bg-[#ff0058]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
