import type { Agency } from "@/types/agency";

export const agencies: Agency[] = [
  {
    agencyId: "wmibc",
    name: "World Multinational Immigration & Business Consultancy",
    shortName: "WMIBC",
    logo: "/logos/wmibc.png",
    modules: [
      "dashboard",
      "leads",
      "clients",
      "applications",
      "visa-information",
      "payments",
      "refunds",
      "staff",
      "reports",
    ],
  },
  {
    agencyId: "abc-travel",
    name: "ABC Travel Consultancy",
    shortName: "ABC Travel",
    logo: "/logos/abc-travel.png",
    modules: [
      "dashboard",
      "leads",
      "clients",
      "applications",
      "visa-information",
      "payments",
      "refunds",
      "staff",
      "reports",
    ],
  },
];

export function getAgencyById(agencyId: string) {
  return agencies.find((agency) => agency.agencyId === agencyId) || null;
}