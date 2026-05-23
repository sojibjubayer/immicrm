import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  Phone,
  Mail,
  IdCard,
  FileText,
  Users,
  UserCheck,
  Clock,
  CircleDollarSign,
  Eye,
  Pencil,
} from "lucide-react";

type ClientsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const clients = [
  {
    id: "CL-1001",
    name: "Mohammed Ali",
    phone: "+974 5555 1234",
    email: "mohammed@example.com",
    qid: "29000000001",
    passport: "A1234567",
    country: "Germany",
    visaType: "Work Visa",
    status: "Processing",
    consultant: "Ahmed",
    totalAmount: "38,000 QAR",
    paidAmount: "6,500 QAR",
    createdAt: "23 May 2026",
  },
  {
    id: "CL-1002",
    name: "Ayesha Khan",
    phone: "+974 6666 7788",
    email: "ayesha@example.com",
    qid: "29100000002",
    passport: "B7654321",
    country: "Canada",
    visaType: "Visit Visa",
    status: "Document Pending",
    consultant: "Sara",
    totalAmount: "4,500 QAR",
    paidAmount: "1,500 QAR",
    createdAt: "20 May 2026",
  },
  {
    id: "CL-1003",
    name: "Rahman Hossain",
    phone: "+974 7777 9080",
    email: "rahman@example.com",
    qid: "29200000003",
    passport: "C9988776",
    country: "UK",
    visaType: "Study Visa",
    status: "Submitted",
    consultant: "Nabil",
    totalAmount: "8,000 QAR",
    paidAmount: "8,000 QAR",
    createdAt: "18 May 2026",
  },
];

const stats = [
  {
    title: "Total Clients",
    value: "248",
    note: "All client records",
    icon: Users,
  },
  {
    title: "Active Files",
    value: "132",
    note: "Currently processing",
    icon: FileText,
  },
  {
    title: "Completed",
    value: "74",
    note: "Finished applications",
    icon: UserCheck,
  },
  {
    title: "Pending Payment",
    value: "42",
    note: "Due payment records",
    icon: CircleDollarSign,
  },
];

function getStatusClass(status: string) {
  if (status === "Processing") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "Document Pending") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  if (status === "Submitted") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  if (status === "Completed") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function ClientsPage({ params }: ClientsPageProps) {
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
                  Client Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Clients
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Manage client profiles, visa files, documents, payments,
                  refunds, notes, and application progress.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add New Client
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
                  All Clients
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Client records for {agency.shortName}
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
                    placeholder="Search clients..."
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
                  <option>Processing</option>
                  <option>Document Pending</option>
                  <option>Submitted</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1.3fr_1fr_1fr_1fr_1fr_0.7fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 xl:grid">
                <span>Client</span>
                <span>Identity</span>
                <span>Visa File</span>
                <span>Payment</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              <div className="divide-y divide-slate-100">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="grid gap-5 px-5 py-5 xl:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_0.7fr] xl:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                          {client.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {client.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {client.id} • Added {client.createdAt}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col gap-1 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <Phone size={15} />
                          {client.phone}
                        </span>
                        <span className="flex items-center gap-2">
                          <Mail size={15} />
                          {client.email}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 font-semibold text-slate-700">
                        <IdCard size={16} className="text-slate-400" />
                        QID: {client.qid}
                      </p>
                      <p className="flex items-center gap-2 font-semibold text-slate-700">
                        <FileText size={16} className="text-slate-400" />
                        Pass: {client.passport}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {client.country}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {client.visaType}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-400">
                        Consultant: {client.consultant}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Total: {client.totalAmount}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Paid: {client.paidAmount}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                          client.status
                        )}`}
                      >
                        {client.status}
                      </span>

                      <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-400">
                        <Clock size={14} />
                        Updated recently
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label="View client"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                        aria-label="Edit client"
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