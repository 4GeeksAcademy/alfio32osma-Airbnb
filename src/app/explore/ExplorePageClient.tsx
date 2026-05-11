"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TopNavbar from "@/components/layout/TopNavbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ExploreSections from "@/components/shared/ExploreSections";
import { ExplorePageData, ExploreTab } from "@/types/explore";

interface ExplorePageClientProps {
  data: ExplorePageData;
}

export default function ExplorePageClient({ data }: ExplorePageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = useMemo<ExploreTab>(() => {
    const tab = searchParams.get("tab");
    const fallbackTab = data.categories[0]?.id ?? "stays";

    if (tab === null) {
      return fallbackTab;
    }

    return data.categories.some((category) => category.id === tab) ? (tab as ExploreTab) : fallbackTab;
  }, [data.categories, searchParams]);

  const onTabChange = useCallback(
    (tab: ExploreTab) => {
      const params = new URLSearchParams(searchParams.toString());

      if (tab === "stays") {
        params.delete("tab");
      } else {
        params.set("tab", tab);
      }

      const query = params.toString();
      const href = query.length > 0 ? `${pathname}?${query}` : pathname;

      router.replace(href, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-[28rem] bg-[#f4f4f4]">
      <TopNavbar />
      <CategoryTabs categories={data.categories} activeTab={activeTab} onTabChange={onTabChange} />
      <ExploreSections content={data.tabContent[activeTab]} />
      <BottomNavigation items={data.bottomNav} activeItemId="explore" />
    </main>
  );
}
