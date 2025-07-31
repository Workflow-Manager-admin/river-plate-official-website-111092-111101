import React, { useState } from "react";
import styles from "./ContactForm.module.css";

// PUBLIC_INTERFACE
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Normally, here you would POST to an API endpoint
    setTimeout(() => setForm({ name: "", email: "", message: "" }), 800);
  }

  return (
    <section className={styles.contactSection} id="contact">
      <h2>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            required
            name="message"
            id="message"
            placeholder="Type your message…"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Send
        </button>
        {submitted && <div className={styles.successMsg}>Thank you! We have received your message.</div>}
      </form>
    </section>
  );
}

export default ContactForm;
