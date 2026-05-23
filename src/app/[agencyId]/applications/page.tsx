import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  FileText,
  Plane,
  Clock,
  CheckCircle2,
  XCircle,
  CalendarDays,
  User,
  Eye,
  Pencil,
} from "lucide-react";

type ApplicationsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const applications = [
  {
    id: "APP-1001",
    clientName: "Mohammed Ali",
    country: "Germany",
    visaType: "Work Visa",
    category: "Food Court & Supermarket",
    status: "Document Collection",
    assignedTo: "Ahmed",
    startDate: "23 May 2026",
    expectedDate: "23 Sep 2026",
  },
  {
    id: "APP-1002",
    clientName: "Ayesha Khan",
    country: "Canada",
    visaType: "Visit Visa",
    category: "Tourist Visa",
    status: "File Review",
    assignedTo: "Sara",
    startDate: "20 May 2026",
    expectedDate: "05 Jun 2026",
  },
  {
    id: "APP-1003",
    clientName: "Rahman Hossain",
    country: "United Kingdom",
    visaType: "Study Visa",
    category: "Student Visa",
    status: "Submitted",
    assignedTo: "Nabil",
    startDate: "18 May 2026",
    expectedDate: "30 Jun 2026",
  },
  {
    id: "APP-1004",
    clientName: "Karim Uddin",
    country: "France",
    visaType: "Visit Visa",
    category: "Schengen Tourist Visa",
    status: "Approved",
    assignedTo: "Ahmed",
    startDate: "10 May 2026",
    expectedDate: "28 May 2026",
  },
];

const stats = [
  {
    title: "Total Applications",
    value: "186",
    note: "All visa files",
    icon: FileText,
  },
  {
    title: "Processing",
    value: "92",
    note: "Currently active",
    icon: Clock,
  },
  {
    title: "Approved",
    value: "61",
    note: "Successful files",
    icon: CheckCircle2,
  },
  {
    title: "Rejected",
    value: "08",
    note: "Rejected files",
    icon: XCircle,
  },
];

function getStatusClass(status: string) {
  if (status === "Document Collection") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  if (status === "File Review") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "Submitted") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  if (status === "Approved") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Rejected") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function ApplicationsPage({
  params,
}: ApplicationsPageProps) {
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
                  Visa File Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Applications
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Track every client visa file from document collection to
                  submission, approval, rejection, completion, or refund.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                New Application
              </button>
            </div>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
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
                      <h2 className="mt-3 text-3xl font-bold text-slate-950">
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

          <section className="mt-6 rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  All Applications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Visa processing files for {agency.shortName}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:w-72"
                  />
                </div>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Visa Types</option>
                  <option>Work Visa</option>
                  <option>Visit Visa</option>
                  <option>Study Visa</option>
                </select>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Status</option>
                  <option>Document Collection</option>
                  <option>File Review</option>
                  <option>Submitted</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1fr_1.2fr_1fr_1fr_1fr_0.7fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 xl:grid">
                <span>Application</span>
                <span>Client</span>
                <span>Visa File</span>
                <span>Assigned</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              <div className="divide-y divide-slate-100">
                {applications.map((application) => (
                  <div
                    key={application.id}
                    className="grid gap-5 px-5 py-5 xl:grid-cols-[1fr_1.2fr_1fr_1fr_1fr_0.7fr] xl:items-center"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {application.id}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <CalendarDays size={16} />
                        {application.startDate}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                          {application.clientName
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {application.clientName}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            Expected: {application.expectedDate}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Plane size={16} className="text-blue-600" />
                        {application.country}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        {application.visaType}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {application.category}
                      </p>
                    </div>

                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <User size={16} className="text-slate-400" />
                      {application.assignedTo}
                    </p>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label="View application"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                        aria-label="Edit application"
                      >
                        <Pencil size={18} />
                      </button>
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