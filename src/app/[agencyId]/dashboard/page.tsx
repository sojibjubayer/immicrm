import { notFound } from "next/navigation";
import { getAgencyById } from "@/lib/agencies";
import Dashboard from "@/components/crm/Dashboard";

type DashboardPageProps = {
  params: Promise<{
    agencyId: string;
  }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { agencyId } = await params;

  const agency = getAgencyById(agencyId);

  if (!agency) {
    notFound();
  }

  return <Dashboard agency={agency} />;
}