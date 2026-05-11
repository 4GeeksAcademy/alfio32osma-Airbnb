"use client";

import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import CategoryTabs from "@/components/CategoryTabs";
import ExploreSections from "@/components/ExploreSections";
import TopNavbar from "@/components/TopNavbar";
import { ExplorePageData, ExploreTab } from "@/types/explore";

interface ExploreHomeClientProps {
  data: ExplorePageData;
}

export default function ExploreHomeClient({ data }: ExploreHomeClientProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<ExploreTab>("stays");

  return (
    <main className="mx-auto min-h-screen w-full max-w-[28rem] bg-[#f4f4f4]">
      <TopNavbar />
      <CategoryTabs categories={data.categories} activeTab={activeTab} onTabChange={setActiveTab} />
      <ExploreSections content={data.tabContent[activeTab]} />
      <BottomNavigation items={data.bottomNav} activeItemId="explore" />
    </main>
  );
}
