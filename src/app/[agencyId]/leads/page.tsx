import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  Phone,
  Mail,
  CalendarDays,
  UserRoundCheck,
  UserRoundX,
  Clock,
} from "lucide-react";

type LeadsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const leads = [
  {
    name: "Mohammed Ali",
    phone: "+974 5555 1234",
    email: "mohammed@example.com",
    visaType: "Germany Work Visa",
    source: "Facebook",
    status: "Interested",
    consultant: "Ahmed",
    followUp: "25 May 2026",
  },
  {
    name: "Ayesha Khan",
    phone: "+974 6666 7788",
    email: "ayesha@example.com",
    visaType: "Canada Visit Visa",
    source: "Website",
    status: "Follow Up",
    consultant: "Sara",
    followUp: "27 May 2026",
  },
  {
    name: "Rahman Hossain",
    phone: "+974 7777 9080",
    email: "rahman@example.com",
    visaType: "UK Study Visa",
    source: "WhatsApp",
    status: "New Lead",
    consultant: "Nabil",
    followUp: "Today",
  },
];

const stats = [
  {
    title: "Total Leads",
    value: "142",
    note: "All active inquiries",
    icon: UserRoundCheck,
  },
  {
    title: "New Leads",
    value: "18",
    note: "This week",
    icon: Plus,
  },
  {
    title: "Follow Ups",
    value: "31",
    note: "Pending follow-ups",
    icon: Clock,
  },
  {
    title: "Not Interested",
    value: "09",
    note: "Closed leads",
    icon: UserRoundX,
  },
];

function getStatusClass(status: string) {
  if (status === "Interested") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Follow Up") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "New Lead") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function LeadsPage({ params }: LeadsPageProps) {
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
                  Lead Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Leads
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Manage new inquiries, follow-ups, interested clients, and
                  convert leads into client profiles.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add New Lead
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
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  All Leads
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Lead records for {agency.shortName}
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
                    placeholder="Search leads..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:w-72"
                  />
                </div>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Status</option>
                  <option>New Lead</option>
                  <option>Interested</option>
                  <option>Follow Up</option>
                  <option>Not Interested</option>
                  <option>Converted</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1.3fr_1fr_1fr_1fr_1fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 lg:grid">
                <span>Lead</span>
                <span>Visa Interest</span>
                <span>Source</span>
                <span>Status</span>
                <span>Follow Up</span>
              </div>

              <div className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <div
                    key={lead.email}
                    className="grid gap-4 px-5 py-5 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:items-center"
                  >
                    <div>
                      <h3 className="font-bold text-slate-950">
                        {lead.name}
                      </h3>

                      <div className="mt-2 flex flex-col gap-1 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <Phone size={15} />
                          {lead.phone}
                        </span>
                        <span className="flex items-center gap-2">
                          <Mail size={15} />
                          {lead.email}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {lead.visaType}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Consultant: {lead.consultant}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-slate-600">
                      {lead.source}
                    </p>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <CalendarDays size={16} />
                      {lead.followUp}
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