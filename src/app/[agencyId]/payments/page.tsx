import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  CircleDollarSign,
  WalletCards,
  Clock,
  ReceiptText,
  User,
  CalendarDays,
  CreditCard,
  Banknote,
  Eye,
  Pencil,
  Download,
} from "lucide-react";

type PaymentsPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const payments = [
  {
    id: "PAY-1001",
    clientName: "Mohammed Ali",
    applicationId: "APP-1001",
    country: "Germany",
    visaType: "Work Visa",
    totalAmount: "38,000 QAR",
    paidAmount: "6,500 QAR",
    dueAmount: "31,500 QAR",
    lastPayment: "5,000 QAR",
    method: "Cash",
    status: "Partial Paid",
    receivedBy: "Ahmed",
    paymentDate: "23 May 2026",
  },
  {
    id: "PAY-1002",
    clientName: "Ayesha Khan",
    applicationId: "APP-1002",
    country: "Canada",
    visaType: "Visit Visa",
    totalAmount: "4,500 QAR",
    paidAmount: "1,500 QAR",
    dueAmount: "3,000 QAR",
    lastPayment: "1,500 QAR",
    method: "Bank Transfer",
    status: "Partial Paid",
    receivedBy: "Sara",
    paymentDate: "20 May 2026",
  },
  {
    id: "PAY-1003",
    clientName: "Rahman Hossain",
    applicationId: "APP-1003",
    country: "United Kingdom",
    visaType: "Study Visa",
    totalAmount: "8,000 QAR",
    paidAmount: "8,000 QAR",
    dueAmount: "0 QAR",
    lastPayment: "3,000 QAR",
    method: "Card",
    status: "Paid",
    receivedBy: "Nabil",
    paymentDate: "18 May 2026",
  },
  {
    id: "PAY-1004",
    clientName: "Karim Uddin",
    applicationId: "APP-1004",
    country: "France",
    visaType: "Visit Visa",
    totalAmount: "1,200 QAR",
    paidAmount: "0 QAR",
    dueAmount: "1,200 QAR",
    lastPayment: "0 QAR",
    method: "Pending",
    status: "Unpaid",
    receivedBy: "-",
    paymentDate: "Not paid",
  },
];

const stats = [
  {
    title: "Total Collection",
    value: "284,500 QAR",
    note: "Received payments",
    icon: CircleDollarSign,
  },
  {
    title: "Pending Due",
    value: "96,000 QAR",
    note: "Remaining balance",
    icon: Clock,
  },
  {
    title: "Paid Records",
    value: "74",
    note: "Fully paid clients",
    icon: WalletCards,
  },
  {
    title: "Invoices",
    value: "186",
    note: "Total payment records",
    icon: ReceiptText,
  },
];

function getStatusClass(status: string) {
  if (status === "Paid") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Partial Paid") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "Unpaid") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

function getMethodIcon(method: string) {
  if (method === "Cash") return Banknote;
  if (method === "Bank Transfer") return CreditCard;
  if (method === "Card") return CreditCard;
  return Clock;
}

export default async function PaymentsPage({ params }: PaymentsPageProps) {
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
                  Payment Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Payments
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Track total amount, received payments, due balance, payment
                  history, invoices, and client-wise collection records.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add Payment
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

          <section className="mt-6 rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Payment Records
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Client payment records for {agency.shortName}
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
                    placeholder="Search payments..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:w-72"
                  />
                </div>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Status</option>
                  <option>Paid</option>
                  <option>Partial Paid</option>
                  <option>Unpaid</option>
                </select>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Methods</option>
                  <option>Cash</option>
                  <option>Bank Transfer</option>
                  <option>Card</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1fr_1.3fr_1fr_1fr_1fr_0.8fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 xl:grid">
                <span>Payment</span>
                <span>Client</span>
                <span>Amount</span>
                <span>Method</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              <div className="divide-y divide-slate-100">
                {payments.map((payment) => {
                  const MethodIcon = getMethodIcon(payment.method);

                  return (
                    <div
                      key={payment.id}
                      className="grid gap-5 px-5 py-5 xl:grid-cols-[1fr_1.3fr_1fr_1fr_1fr_0.8fr] xl:items-center"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-950">
                          {payment.id}
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                          <CalendarDays size={16} />
                          {payment.paymentDate}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                            {payment.clientName
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)}
                          </div>

                          <div>
                            <h3 className="font-bold text-slate-950">
                              {payment.clientName}
                            </h3>
                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {payment.applicationId} • {payment.country}
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              {payment.visaType}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-950">
                          Total: {payment.totalAmount}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-emerald-700">
                          Paid: {payment.paidAmount}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-red-600">
                          Due: {payment.dueAmount}
                        </p>
                      </div>

                      <div>
                        <p className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <MethodIcon size={16} className="text-blue-600" />
                          {payment.method}
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-500">
                          <User size={14} />
                          {payment.receivedBy}
                        </p>
                      </div>

                      <span
                        className={`w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                          aria-label="View payment"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                          aria-label="Edit payment"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                          aria-label="Download invoice"
                        >
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}