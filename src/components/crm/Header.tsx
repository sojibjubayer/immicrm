import Image from "next/image";
import type { Agency } from "@/types/agency";
import { Bell, Menu, Plus } from "lucide-react";

type HeaderProps = {
  agency: Agency;
};

export default function Header({ agency }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={agency.logo}
              alt={`${agency.shortName} logo`}
              fill
              className="object-contain p-2"
              sizes="48px"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {agency.shortName}
            </p>

            <h1 className="truncate text-lg font-bold text-slate-950 sm:text-xl">
              Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 sm:block"
          >
            Notifications
          </button>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 sm:hidden"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 to-pink-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:opacity-95"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add Client</span>
          </button>
        </div>
      </div>
    </header>
  );
}