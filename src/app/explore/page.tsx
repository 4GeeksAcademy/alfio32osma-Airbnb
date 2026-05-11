import ExplorePageClient from "./ExplorePageClient";
import { getExplorePageData } from "@/services/exploreService";

export default async function ExplorePage() {
  const data = await getExplorePageData();

  return <ExplorePageClient data={data} />;
}
