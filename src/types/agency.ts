export type AgencyModule =
  | "dashboard"
  | "leads"
  | "clients"
  | "applications"
  | "visa-information"
  | "payments"
  | "refunds"
  | "staff"
  | "reports";

export type Agency = {
  agencyId: string;
  name: string;
  shortName: string;
  logo: string;
  modules: AgencyModule[];
};