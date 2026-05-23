import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  Plane,
  BriefcaseBusiness,
  GraduationCap,
  MapPinned,
  Clock,
  CircleDollarSign,
  FileText,
  Eye,
  Pencil,
  Trash2,
  CheckCircle2,
} from "lucide-react";

type VisaInformationPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const visaInformation = [
  {
    id: "VISA-1001",
    title: "Germany Food Court & Supermarket Job",
    country: "Germany",
    visaType: "Work Visa",
    category: "Food Court & Supermarket",
    processingTime: "3–4 months",
    totalAmount: "38,000 QAR",
    firstPayment: "1,500 QAR",
    status: "Active",
    documents: [
      "Passport copy",
      "QID copy",
      "Photo",
      "Current work experience",
      "Pre-medical before embassy submission",
    ],
  },
  {
    id: "VISA-1002",
    title: "Canada Tourist Visa",
    country: "Canada",
    visaType: "Visit Visa",
    category: "Tourism / Family Visit",
    processingTime: "Varies by case",
    totalAmount: "4,500 QAR",
    firstPayment: "1,500 QAR",
    status: "Active",
    documents: [
      "Passport copy",
      "QID copy",
      "Photo",
      "Bank statement",
      "Employment certificate",
    ],
  },
  {
    id: "VISA-1003",
    title: "UK Student Visa",
    country: "United Kingdom",
    visaType: "Study Visa",
    category: "Student Visa",
    processingTime: "3–6 weeks",
    totalAmount: "8,000 QAR",
    firstPayment: "2,000 QAR",
    status: "Active",
    documents: [
      "Passport copy",
      "CAS letter",
      "Bank statement",
      "Academic certificates",
      "English test certificate if required",
    ],
  },
  {
    id: "VISA-1004",
    title: "France Schengen Tourist Visa",
    country: "France",
    visaType: "Visit Visa",
    category: "Schengen Tourist Visa",
    processingTime: "10–15 working days",
    totalAmount: "1,200 QAR",
    firstPayment: "500 QAR",
    status: "Inactive",
    documents: [
      "Passport copy",
      "QID copy",
      "Photo",
      "Travel insurance",
      "Hotel and flight booking",
    ],
  },
];

const stats = [
  {
    title: "Total Visa Services",
    value: "36",
    note: "All visa packages",
    icon: FileText,
  },
  {
    title: "Work Visa",
    value: "14",
    note: "Job-based services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Visit Visa",
    value: "16",
    note: "Tourist / family visit",
    icon: Plane,
  },
  {
    title: "Study Visa",
    value: "06",
    note: "Student visa services",
    icon: GraduationCap,
  },
];

function getVisaTypeClass(visaType: string) {
  if (visaType === "Work Visa") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (visaType === "Visit Visa") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  if (visaType === "Study Visa") {
    return "bg-violet-50 text-violet-700 ring-violet-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

function getStatusClass(status: string) {
  if (status === "Active") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Inactive") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function VisaInformationPage({
  params,
}: VisaInformationPageProps) {
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
                  Visa Service Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Visa Information
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Manage visa services, countries, categories, processing time,
                  required documents, payment details, and active packages.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add Visa Service
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
                  Visa Services
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Visa packages and service details for {agency.shortName}
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
                    placeholder="Search visa services..."
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
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-2">
              {visaInformation.map((visa) => (
                <article
                  key={visa.id}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${getVisaTypeClass(
                            visa.visaType
                          )}`}
                        >
                          {visa.visaType}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                            visa.status
                          )}`}
                        >
                          {visa.status}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-slate-950">
                        {visa.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-slate-500">
                        {visa.id}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label="View visa service"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                        aria-label="Edit visa service"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-red-50 hover:text-red-700"
                        aria-label="Delete visa service"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <MapPinned size={16} />
                        Country
                      </p>
                      <h4 className="mt-2 font-bold text-slate-950">
                        {visa.country}
                      </h4>
                    </div>

                    <div className="rounded-3xl bg-white p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <BriefcaseBusiness size={16} />
                        Category
                      </p>
                      <h4 className="mt-2 font-bold text-slate-950">
                        {visa.category}
                      </h4>
                    </div>

                    <div className="rounded-3xl bg-white p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <Clock size={16} />
                        Processing Time
                      </p>
                      <h4 className="mt-2 font-bold text-slate-950">
                        {visa.processingTime}
                      </h4>
                    </div>

                    <div className="rounded-3xl bg-white p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <CircleDollarSign size={16} />
                        Payment
                      </p>
                      <h4 className="mt-2 font-bold text-slate-950">
                        {visa.totalAmount}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        First Payment: {visa.firstPayment}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl bg-white p-4">
                    <p className="text-sm font-bold text-slate-950">
                      Required Documents
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {visa.documents.map((document) => (
                        <span
                          key={document}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                        >
                          <CheckCircle2 size={13} className="text-blue-600" />
                          {document}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}