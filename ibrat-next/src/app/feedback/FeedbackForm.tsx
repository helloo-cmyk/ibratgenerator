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
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {status && (
        <div className={`p-6 border-2 font-black italic uppercase tracking-tight text-sm ${status.type === 'success' ? 'bg-[#89CC04]/10 border-[#89CC04] text-black' : 'bg-red-50 border-red-500 text-red-700'}`}>
          {status.message}
        </div>
      )}
      
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-[12px] font-black uppercase tracking-widest opacity-50">
          Identity <span className="font-normal italic">(optional)</span>
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          disabled={isSubmitting}
          className="w-full bg-white border-2 border-black/10 px-6 py-4 text-[18px] font-medium focus:outline-none focus:border-black transition-all disabled:opacity-50 placeholder:opacity-20 italic"
          placeholder="Your name or handle"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-[12px] font-black uppercase tracking-widest opacity-50">
          Reach <span className="font-normal italic">(optional)</span>
        </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          disabled={isSubmitting}
          className="w-full bg-white border-2 border-black/10 px-6 py-4 text-[18px] font-medium focus:outline-none focus:border-black transition-all disabled:opacity-50 placeholder:opacity-20 italic"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="text-[12px] font-black uppercase tracking-widest opacity-50">
          Thoughts <span className="text-[#89CC04]">*</span>
        </label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows={6}
          disabled={isSubmitting}
          className="w-full bg-white border-2 border-black/10 px-6 py-4 text-[18px] font-medium focus:outline-none focus:border-black transition-all resize-y disabled:opacity-50 placeholder:opacity-20 italic"
          placeholder="What's on your mind? Suggestions, bugs, or vibes..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-black !text-white py-6 px-8 text-xl font-black italic uppercase tracking-tighter hover:bg-[#89CC04] hover:text-black transition-all disabled:opacity-50 flex items-center justify-center gap-4 group"
      >
        {isSubmitting ? "Processing..." : "Dispatch Feedback"}
        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
      </button>
    </form>
  );
}
