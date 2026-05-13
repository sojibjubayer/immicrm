import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | ImmiCRM by Samira Cloud",
  description:
    "Login to ImmiCRM, a modern immigration consultancy CRM by Samira Cloud.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-violet-600 text-xl font-bold shadow-lg">
              IC
            </div>

            <p className="text-sm font-medium text-blue-300">
              Samira Cloud
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Welcome to ImmiCRM
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Login to manage leads, clients, visa information, appointments,
              payments, and staff.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@agency.com"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-200">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-blue-300 hover:text-blue-200"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-blue-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01] hover:shadow-blue-500/30"
            >
              Login to CRM
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xs leading-5 text-slate-300">
              Each agency sees only their own logo, company name, staff, leads,
              clients, visa data, appointments, and payment records.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            © 2026 ImmiCRM. Powered by Samira Cloud.
          </p>
        </div>
      </section>
    </main>
  );
}