import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  RotateCcw,
  Clock,
  CheckCircle2,
  XCircle,
  User,
  CalendarDays,
  CircleDollarSign,
  FileText,
  Eye,
  Pencil,
  History,
} from "lucide-react";

type RefundsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const refunds = [
  {
    id: "REF-1001",
    clientName: "Mohammed Ali",
    applicationId: "APP-1001",
    country: "Germany",
    visaType: "Work Visa",
    totalAmount: "38,000 QAR",
    paidAmount: "6,500 QAR",
    amountAfterDeduction: "4,500 QAR",
    refundStatus: "Under Review",
    appliedForRefund: "Yes",
    previousRefundDate: "10 May 2026",
    nextRefundDate: "30 May 2026",
    refundConsultant: "Ahmed",
    reason: "Application delayed and client requested refund review.",
  },
  {
    id: "REF-1002",
    clientName: "Ayesha Khan",
    applicationId: "APP-1002",
    country: "Canada",
    visaType: "Visit Visa",
    totalAmount: "4,500 QAR",
    paidAmount: "1,500 QAR",
    amountAfterDeduction: "1,000 QAR",
    refundStatus: "Appeal Possible",
    appliedForRefund: "Yes",
    previousRefundDate: "18 May 2026",
    nextRefundDate: "05 Jun 2026",
    refundConsultant: "Sara",
    reason: "Visa refusal received. Appeal option is being checked.",
  },
  {
    id: "REF-1003",
    clientName: "Rahman Hossain",
    applicationId: "APP-1003",
    country: "United Kingdom",
    visaType: "Study Visa",
    totalAmount: "8,000 QAR",
    paidAmount: "8,000 QAR",
    amountAfterDeduction: "0 QAR",
    refundStatus: "Rejected",
    appliedForRefund: "No",
    previousRefundDate: "-",
    nextRefundDate: "-",
    refundConsultant: "Nabil",
    reason: "No refund request submitted.",
  },
  {
    id: "REF-1004",
    clientName: "Karim Uddin",
    applicationId: "APP-1004",
    country: "France",
    visaType: "Visit Visa",
    totalAmount: "1,200 QAR",
    paidAmount: "1,200 QAR",
    amountAfterDeduction: "900 QAR",
    refundStatus: "Refunded",
    appliedForRefund: "Yes",
    previousRefundDate: "01 May 2026",
    nextRefundDate: "Completed",
    refundConsultant: "Ahmed",
    reason: "Refund completed after company policy deduction.",
  },
];

const stats = [
  {
    title: "Total Refunds",
    value: "24",
    note: "All refund records",
    icon: RotateCcw,
  },
  {
    title: "Under Review",
    value: "09",
    note: "Pending decision",
    icon: Clock,
  },
  {
    title: "Refunded",
    value: "11",
    note: "Completed refunds",
    icon: CheckCircle2,
  },
  {
    title: "Rejected",
    value: "04",
    note: "Not eligible",
    icon: XCircle,
  },
];

function getStatusClass(status: string) {
  if (status === "Refunded") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Under Review") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "Appeal Possible") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  if (status === "Rejected") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  if (status === "Applied") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function RefundsPage({ params }: RefundsPageProps) {
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
                  Refund Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Refunds
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Track refund requests, appeal status, policy deductions,
                  refund dates, and refund consultant activity.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add Refund
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
                  Refund Records
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Refund records for {agency.shortName}
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
                    placeholder="Search refunds..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:w-72"
                  />
                </div>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Status</option>
                  <option>Applied</option>
                  <option>Under Review</option>
                  <option>Appeal Possible</option>
                  <option>Refunded</option>
                  <option>Rejected</option>
                </select>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Visa Types</option>
                  <option>Work Visa</option>
                  <option>Visit Visa</option>
                  <option>Study Visa</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1fr_1.25fr_1fr_1fr_1fr_0.8fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 xl:grid">
                <span>Refund</span>
                <span>Client</span>
                <span>Visa File</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              <div className="divide-y divide-slate-100">
                {refunds.map((refund) => (
                  <div
                    key={refund.id}
                    className="grid gap-5 px-5 py-5 xl:grid-cols-[1fr_1.25fr_1fr_1fr_1fr_0.8fr] xl:items-center"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {refund.id}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <CalendarDays size={16} />
                        Next: {refund.nextRefundDate}
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <History size={14} />
                        Previous: {refund.previousRefundDate}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                          {refund.clientName
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {refund.clientName}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {refund.applicationId} • Applied:{" "}
                            {refund.appliedForRefund}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {refund.reason}
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <FileText size={16} className="text-blue-600" />
                        {refund.country}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        {refund.visaType}
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <User size={14} />
                        {refund.refundConsultant}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        Paid: {refund.paidAmount}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        Total: {refund.totalAmount}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-sm font-bold text-blue-700">
                        <CircleDollarSign size={15} />
                        After Deduction: {refund.amountAfterDeduction}
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                        refund.refundStatus
                      )}`}
                    >
                      {refund.refundStatus}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label="View refund"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                        aria-label="Edit refund"
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