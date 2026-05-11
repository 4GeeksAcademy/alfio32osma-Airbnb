import CatalogPageClient from "./CatalogPageClient";
import { getHomeDataset } from "@/services/homeService";

export default function CatalogPage() {
  // Especificacion: la ruta orquesta datos y delega la vista en su modulo local dentro de app/catalog.
  const { properties } = getHomeDataset();

  return <CatalogPageClient properties={properties} />;
}
