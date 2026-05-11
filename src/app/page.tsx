import ExploreHomeClient from "@/components/ExploreHomeClient";
import { getExplorePageData } from "@/services/exploreService";

export default async function HomePage() {
  const data = await getExplorePageData();

  return <ExploreHomeClient data={data} />;
}