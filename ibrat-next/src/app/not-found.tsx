import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hp-root flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl sm:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          404 <span className="text-[#89CC04]">-</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-8 leading-tight">
          Page Not Found
        </h2>
        <p className="hp-body-text mb-12 text-[18px] opacity-70 leading-relaxed italic">
          This page does not exist. It might have been moved or deleted. Try the brat generator instead.
        </p>
        <Link 
          href="/" 
          className="group inline-flex items-center text-2xl font-black italic uppercase tracking-tighter transition-all"
        >
          <span className="relative">
            Go to Brat Generator
            <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
          </span>
          <svg className="ml-4 w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
