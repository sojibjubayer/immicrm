import type { Agency } from "@/types/agency";
import Header from "./Header";
import Sidebar from "./Sidebar";

type DashboardProps = {
  agency: Agency;
};

export default function Dashboard({ agency }: DashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar agency={agency} />

      <div className="lg:pl-72">
        <Header agency={agency} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <section className="rounded-4xl bg-linear-to-br from-blue-600 via-indigo-600 to-pink-500 p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Agency Dashboard
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Welcome to {agency.shortName} CRM
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
              Manage leads, clients, applications, visa information, payments,
              refunds, staff, and reports.
            </p>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Total Clients
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">248</h2>
              <p className="mt-2 text-sm text-slate-500">
                Active client profiles
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">New Leads</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">42</h2>
              <p className="mt-2 text-sm text-slate-500">This month</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Applications
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">86</h2>
              <p className="mt-2 text-sm text-slate-500">
                Visa files in progress
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Staff</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">12</h2>
              <p className="mt-2 text-sm text-slate-500">
                Active team members
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}