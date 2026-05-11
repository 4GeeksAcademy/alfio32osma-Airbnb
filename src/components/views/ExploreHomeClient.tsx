"use client";

import { useState } from "react";
import TopNavbar from "@/components/layout/TopNavbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ExploreSections from "@/components/shared/ExploreSections";
import { ExplorePageData, ExploreTab } from "@/types/explore";

interface ExploreHomeClientProps {
  data: ExplorePageData;
}

export default function ExploreHomeClient({ data }: ExploreHomeClientProps) {
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
