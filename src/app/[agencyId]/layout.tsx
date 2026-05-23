import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import type { Metadata } from "next";

type AgencyLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    agencyId: string;
  }>;
};

export async function generateMetadata({
  params,
}: AgencyLayoutProps): Promise<Metadata> {
  const { agencyId } = await params;
  const agency = getAgencyById(agencyId);

  return {
    title: agency ? `${agency.shortName} | ImmiCRM` : "ImmiCRM",
  };
}

export default async function AgencyLayout({
  children,
  params,
}: AgencyLayoutProps) {
  const { agencyId } = await params;
  const agency = getAgencyById(agencyId);

  if (!agency) {
    notFound();
  }

  return <>{children}</>;
}