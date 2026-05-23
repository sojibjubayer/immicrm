import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Download,
  FileText,
  TrendingUp,
  UserRoundPlus,
  Users,
  XCircle,
} from "lucide-react";

type ReportsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const summaryStats = [
  {
    title: "Total Revenue",
    value: "284,500 QAR",
    note: "This month",
    icon: CircleDollarSign,
  },
  {
    title: "Total Leads",
    value: "142",
    note: "18 new this week",
    icon: UserRoundPlus,
  },
  {
    title: "Total Clients",
    value: "248",
    note: "Active client records",
    icon: Users,
  },
  {
    title: "Applications",
    value: "186",
    note: "All visa files",
    icon: FileText,
  },
];

const applicationReports = [
  {
    title: "Approved Applications",
    value: "61",
    note: "Successful files",
    icon: CheckCircle2,
    badge: "32.7%",
  },
  {
    title: "Processing Applications",
    value: "92",
    note: "Currently active",
    icon: TrendingUp,
    badge: "49.4%",
  },
  {
    title: "Rejected Applications",
    value: "08",
    note: "Rejected files",
    icon: XCircle,
    badge: "4.3%",
  },
];

const countryReports = [
  {
    country: "Germany",
    visaType: "Work Visa",
    applications: 46,
    approved: 18,
    revenue: "126,000 QAR",
  },
  {
    country: "Canada",
    visaType: "Visit Visa",
    applications: 34,
    approved: 12,
    revenue: "48,500 QAR",
  },
  {
    country: "United Kingdom",
    visaType: "Study Visa",
    applications: 28,
    approved: 9,
    revenue: "42,000 QAR",
  },
  {
    country: "France",
    visaType: "Visit Visa",
    applications: 21,
    approved: 14,
    revenue: "31,500 QAR",
  },
];

const staffReports = [
  {
    name: "Ahmed Rahman",
    role: "Agency Admin",
    leads: 38,
    clients: 24,
    applications: 31,
  },
  {
    name: "Sara Khan",
    role: "Consultant",
    leads: 44,
    clients: 19,
    applications: 27,
  },
  {
    name: "Nabil Hossain",
    role: "Document Controller",
    leads: 21,
    clients: 16,
    applications: 24,
  },
];

const paymentReports = [
  {
    label: "Collected",
    amount: "284,500 QAR",
    note: "Received payments",
  },
  {
    label: "Pending Due",
    amount: "96,000 QAR",
    note: "Unpaid balance",
  },
  {
    label: "Refund Pending",
    amount: "18,500 QAR",
    note: "Pending refunds",
  },
];

export default async function ReportsPage({ params }: ReportsPageProps) {
  const { agencyId } = await params;
  const agency = getAgencyById(agencyId);

  if (!agency) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar agency={agency} />

      <div className="lg:pl-72">
        <Header agency={agency} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <section className="rounded-4xl bg-linear-to-br from-blue-600 via-indigo-600 to-pink-500 p-6 text-white shadow-xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Analytics & Performance
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Reports
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  View agency performance, lead conversion, applications,
                  payment collection, refunds, and staff productivity.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 sm:w-fit">
                  <CalendarDays size={18} />
                  This Month
                </button>

                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                  <Download size={18} />
                  Export Report
                </button>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summaryStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {item.title}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                        {item.value}
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-blue-700">
                      <Icon size={22} />
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-500">{item.note}</p>
                </div>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
            <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Application Performance
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Visa file status summary for {agency.shortName}
                  </p>
                </div>

                <BarChart3 className="text-blue-600" size={28} />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {applicationReports.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                          <Icon size={21} />
                        </div>

                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-bold text-slate-950">
                        {item.value}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.note}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-pink-500 p-6 text-white">
                <p className="text-sm font-semibold text-white/75">
                  Monthly Conversion
                </p>
                <h3 className="mt-2 text-4xl font-bold">38.4%</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Lead-to-client conversion rate based on this month&apos;s
                  active inquiries and completed client profiles.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">
                Payment Summary
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Collection and due overview
              </p>

              <div className="mt-6 space-y-4">
                {paymentReports.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-medium text-slate-500">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-950">
                      {item.amount}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Country & Visa Report
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Applications by country and visa type
                  </p>
                </div>

                <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                  View Details
                </button>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                <div className="hidden grid-cols-4 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 sm:grid">
                  <span>Country</span>
                  <span>Applications</span>
                  <span>Approved</span>
                  <span>Revenue</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {countryReports.map((item) => (
                    <div
                      key={`${item.country}-${item.visaType}`}
                      className="grid gap-3 px-5 py-4 text-sm sm:grid-cols-4 sm:items-center"
                    >
                      <div>
                        <p className="font-bold text-slate-950">
                          {item.country}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.visaType}
                        </p>
                      </div>

                      <p className="font-semibold text-slate-700">
                        {item.applications}
                      </p>

                      <p className="font-semibold text-emerald-700">
                        {item.approved}
                      </p>

                      <p className="font-bold text-slate-950">
                        {item.revenue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Staff Performance
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Leads, clients, and files by team member
                  </p>
                </div>

                <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                  View All
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {staffReports.map((staff) => (
                  <div
                    key={staff.name}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {staff.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {staff.role}
                        </p>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                        Active
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-white p-3 text-center">
                        <p className="text-lg font-bold text-slate-950">
                          {staff.leads}
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Leads
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-3 text-center">
                        <p className="text-lg font-bold text-slate-950">
                          {staff.clients}
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Clients
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-3 text-center">
                        <p className="text-lg font-bold text-slate-950">
                          {staff.applications}
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Files
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}