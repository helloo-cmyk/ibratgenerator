"use client";

import { useState, FormEvent } from "react";

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({ type: "error", message: data.error || "Something went wrong" });
      } else {
        setStatus({ type: "success", message: "Feedback sent successfully!" });
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Something went wrong" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {status && (
        <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {status.message}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-[var(--hp-ink)]">
          Name <span className="text-[var(--hp-ink-muted)] font-normal">(optional)</span>
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          disabled={isSubmitting}
          className="bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] rounded-xl px-4 py-3 text-[var(--hp-ink)] focus:outline-none focus:border-[var(--hp-ink)] focus:ring-1 focus:ring-[var(--hp-ink)] transition-all disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-[var(--hp-ink)]">
          Email <span className="text-[var(--hp-ink-muted)] font-normal">(optional)</span>
        </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          disabled={isSubmitting}
          className="bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] rounded-xl px-4 py-3 text-[var(--hp-ink)] focus:outline-none focus:border-[var(--hp-ink)] focus:ring-1 focus:ring-[var(--hp-ink)] transition-all disabled:opacity-50"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-[var(--hp-ink)]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows={5}
          disabled={isSubmitting}
          className="bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] rounded-xl px-4 py-3 text-[var(--hp-ink)] focus:outline-none focus:border-[var(--hp-ink)] focus:ring-1 focus:ring-[var(--hp-ink)] transition-all resize-y disabled:opacity-50"
          placeholder="Your feedback or suggestions..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="hp-btn-primary w-full justify-center mt-2 !py-4 !text-[16px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit Feedback"}
      </button>
    </form>
  );
}
