"use client";

import HomeNavbar from "@/components/layout/HomeNavbar";
import CategoryFilterBar from "@/components/shared/CategoryFilterBar";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import PropertyCard from "@/components/ui/PropertyCard";
import { useHomeListings } from "@/hooks/useHomeListings";

export default function HomePageView() {
  const {
    searchQuery,
    activeCategory,
    visibleProperties,
    isLoading,
    categories,
    onSearchChange,
    onCategoryChange
  } = useHomeListings();

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <HomeNavbar searchValue={searchQuery} onSearchChange={onSearchChange} />
      <CategoryFilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
        <header className="mb-4 flex items-end justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Alojamientos disponibles</h1>
          <p className="text-sm text-zinc-500">{visibleProperties.length} resultados</p>
        </header>

        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {!isLoading && visibleProperties.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-600">
            No se encontraron alojamientos para tu busqueda. Prueba con otro texto o categoria.
          </p>
        ) : null}
      </section>
    </main>
  );
}
