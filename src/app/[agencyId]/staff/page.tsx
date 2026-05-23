import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Header from "@/components/crm/Header";
import Sidebar from "@/components/crm/Sidebar";
import {
  Search,
  Plus,
  Phone,
  Mail,
  ShieldCheck,
  Users,
  UserCheck,
  UserX,
  BriefcaseBusiness,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

type StaffPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

const staffMembers = [
  {
    id: "STF-1001",
    name: "Ahmed Rahman",
    email: "ahmed@wmibc.com",
    phone: "+974 5555 1234",
    role: "Agency Admin",
    department: "Management",
    permissions: ["Leads", "Clients", "Applications", "Payments"],
    status: "Active",
    joinedAt: "10 Jan 2026",
  },
  {
    id: "STF-1002",
    name: "Sara Khan",
    email: "sara@wmibc.com",
    phone: "+974 6666 7788",
    role: "Consultant",
    department: "Visa Processing",
    permissions: ["Leads", "Clients", "Applications"],
    status: "Active",
    joinedAt: "18 Feb 2026",
  },
  {
    id: "STF-1003",
    name: "Nabil Hossain",
    email: "nabil@wmibc.com",
    phone: "+974 7777 9080",
    role: "Document Controller",
    department: "Documentation",
    permissions: ["Clients", "Applications"],
    status: "Active",
    joinedAt: "05 Mar 2026",
  },
  {
    id: "STF-1004",
    name: "Farhan Uddin",
    email: "farhan@wmibc.com",
    phone: "+974 3333 4567",
    role: "Accountant",
    department: "Accounts",
    permissions: ["Payments", "Refunds", "Reports"],
    status: "Inactive",
    joinedAt: "20 Apr 2026",
  },
];

const stats = [
  {
    title: "Total Staff",
    value: "12",
    note: "All team members",
    icon: Users,
  },
  {
    title: "Active Staff",
    value: "10",
    note: "Currently active",
    icon: UserCheck,
  },
  {
    title: "Inactive Staff",
    value: "02",
    note: "Disabled accounts",
    icon: UserX,
  },
  {
    title: "Roles",
    value: "05",
    note: "Permission groups",
    icon: ShieldCheck,
  },
];

function getStatusClass(status: string) {
  if (status === "Active") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Inactive") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

function getRoleClass(role: string) {
  if (role === "Agency Admin") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (role === "Consultant") {
    return "bg-pink-50 text-pink-700 ring-pink-200";
  }

  if (role === "Document Controller") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  if (role === "Accountant") {
    return "bg-violet-50 text-violet-700 ring-violet-200";
  }

  return "bg-slate-50 text-slate-700 ring-slate-200";
}

export default async function StaffPage({ params }: StaffPageProps) {
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
                  Team Management
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Staff
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Manage agency team members, roles, permissions, account
                  status, and staff access for CRM modules.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-fit">
                <Plus size={18} />
                Add Staff
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
                  Staff Members
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Team records for {agency.shortName}
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
                    placeholder="Search staff..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:w-72"
                  />
                </div>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Roles</option>
                  <option>Agency Admin</option>
                  <option>Consultant</option>
                  <option>Document Controller</option>
                  <option>Accountant</option>
                </select>

                <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="hidden grid-cols-[1.4fr_1fr_1.2fr_1fr_1fr_0.8fr] bg-slate-50 px-5 py-3 text-sm font-bold text-slate-500 xl:grid">
                <span>Staff</span>
                <span>Role</span>
                <span>Permissions</span>
                <span>Department</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              <div className="divide-y divide-slate-100">
                {staffMembers.map((staff) => (
                  <div
                    key={staff.id}
                    className="grid gap-5 px-5 py-5 xl:grid-cols-[1.4fr_1fr_1.2fr_1fr_1fr_0.8fr] xl:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                          {staff.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {staff.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {staff.id} • Joined {staff.joinedAt}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col gap-1 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <Phone size={15} />
                          {staff.phone}
                        </span>
                        <span className="flex items-center gap-2">
                          <Mail size={15} />
                          {staff.email}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span
                        className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getRoleClass(
                          staff.role
                        )}`}
                      >
                        {staff.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {staff.permissions.map((permission) => (
                        <span
                          key={permission}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>

                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <BriefcaseBusiness size={16} className="text-slate-400" />
                      {staff.department}
                    </p>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusClass(
                        staff.status
                      )}`}
                    >
                      {staff.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label="View staff"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
                        aria-label="Edit staff"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-red-50 hover:text-red-700"
                        aria-label="Delete staff"
                      >
                        <Trash2 size={18} />
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