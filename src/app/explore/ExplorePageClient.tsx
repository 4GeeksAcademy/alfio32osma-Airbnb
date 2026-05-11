"use client";

import TopNavbar from "@/components/layout/TopNavbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ExploreSections from "@/components/shared/ExploreSections";
import { useExploreTabNavigation } from "@/hooks/useExploreTabNavigation";
import { ExplorePageData } from "@/types/explore";

interface ExplorePageClientProps {
  data: ExplorePageData;
}

export default function ExplorePageClient({ data }: ExplorePageClientProps) {
  const { activeTab, onTabChange } = useExploreTabNavigation(data.categories);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[28rem] bg-[#f4f4f4]">
      <TopNavbar />
      <CategoryTabs categories={data.categories} activeTab={activeTab} onTabChange={onTabChange} />
      <ExploreSections content={data.tabContent[activeTab]} />
      <BottomNavigation items={data.bottomNav} activeItemId="explore" />
    </main>
  );
}
