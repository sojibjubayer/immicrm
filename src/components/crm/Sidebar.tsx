import Link from "next/link";
import type { Agency } from "@/types/agency";
import {
  BarChart3,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  LayoutDashboard,
  RotateCcw,
  TrendingUp,
  UserRoundPlus,
  Users,
} from "lucide-react";

type SidebarProps = {
  agency: Agency;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Leads",
    href: "leads",
    icon: UserRoundPlus,
  },
  {
    label: "Clients",
    href: "clients",
    icon: Users,
  },
  {
    label: "Applications",
    href: "applications",
    icon: FileText,
  },
  {
    label: "Visa Information",
    href: "visa-information",
    icon: BriefcaseBusiness,
  },
  {
    label: "Payments",
    href: "payments",
    icon: CreditCard,
  },
  {
    label: "Refunds",
    href: "refunds",
    icon: RotateCcw,
  },
  {
    label: "Staff",
    href: "staff",
    icon: BarChart3,
  },
  {
    label: "Reports",
    href: "reports",
    icon: TrendingUp,
  },
];

export default function Sidebar({ agency }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white lg:block">
      <div className="flex h-full flex-col p-5">
        <div className="mb-8 rounded-3xl bg-linear-to-br from-blue-600 to-pink-500 p-5 text-white shadow-lg shadow-blue-900/20">
          <p className="text-sm font-semibold text-white/75">ImmiCRM Panel</p>
          <h2 className="mt-2 text-2xl font-bold">{agency.shortName}</h2>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto pb-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={`/${agency.agencyId}/${item.href}`}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-linear-to-r hover:from-blue-50 hover:to-pink-50 hover:text-blue-700"
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}