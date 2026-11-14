import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
      aria-label="AccelEye home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-strong text-navy-950">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3.500-7 10-7 10 7 10 7-3.500 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.800" fill="currentColor" />
        </svg>
      </span>
      <span>
        Accel<span className="text-accent">Eye</span>
      </span>
    </Link>
  );
}
