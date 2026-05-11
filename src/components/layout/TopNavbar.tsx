import Link from "next/link";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  );
}

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 bg-[#f4f4f4] px-4 pb-3 pt-4">
      <Link
        href="/catalog"
        className="mx-auto flex h-14 w-full max-w-[22rem] items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white text-[28px] font-medium text-zinc-900 shadow-sm"
      >
        <SearchIcon />
        Empieza a buscar
      </Link>
    </header>
  );
}
