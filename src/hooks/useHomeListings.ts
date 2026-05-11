"use client";

import { useEffect, useMemo, useState } from "react";
import { getHomeDataset } from "@/services/homeService";
import { HomeCategory, HomeProperty } from "@/types/home";

interface UseHomeListingsResult {
  searchQuery: string;
  activeCategory: string;
  visibleProperties: HomeProperty[];
  isLoading: boolean;
  categories: HomeCategory[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (categoryId: string) => void;
}

export function useHomeListings(): UseHomeListingsResult {
  const dataset = useMemo(() => getHomeDataset(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [allProperties, setAllProperties] = useState<HomeProperty[]>([]);
  const [visibleProperties, setVisibleProperties] = useState<HomeProperty[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setAllProperties([]);
    setVisibleProperties([]);

    const timer = window.setTimeout(() => {
      setAllProperties(dataset.properties);
      setIsLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [dataset.properties]);

  useEffect(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = allProperties.filter((property) => {
      const matchesCategory = activeCategory === "all" || property.categoryId === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        property.title.toLowerCase().includes(normalizedQuery) ||
        property.location.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    // Mantiene la lista renderizada como estado local y la actualiza en cada pulsacion.
    setVisibleProperties(filtered);
  }, [activeCategory, allProperties, searchQuery]);

  return {
    searchQuery,
    activeCategory,
    visibleProperties,
    isLoading,
    categories: dataset.categories,
    onSearchChange: setSearchQuery,
    onCategoryChange: setActiveCategory
  };
}
