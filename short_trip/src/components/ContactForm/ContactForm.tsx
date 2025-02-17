"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-mutecolor rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-red"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-red"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-red"
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-red text-mutecolor font-bold rounded-lg hover:bg-foreground transition-colors"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="mt-4 text-green-500 font-semibold">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red font-semibold">Failed to send message. Please try again.</p>
      )}
    </div>
  );
};

export default ContactForm;
