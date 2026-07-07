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
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 sm:p-8">
      <div className="space-y-4">
        <h3 className="mb-2 text-xl font-bold text-content">Send a message</h3>
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full rounded-lg border border-border bg-surface-2 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-border bg-surface-2 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full rounded-lg border border-border bg-surface-2 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={5}
          required
        />
        <button type="submit" className="btn-primary w-full rounded-lg py-3">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
