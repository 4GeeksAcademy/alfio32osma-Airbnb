import { HomeDataset } from "@/types/home";

const HOME_DATASET: HomeDataset = {
  categories: [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "beach", label: "Playa", icon: "🏖️" },
    { id: "luxury", label: "Mansiones", icon: "🏰" },
    { id: "trending", label: "Tendencias", icon: "🔥" },
    { id: "cabins", label: "Cabanas", icon: "🛖" },
    { id: "design", label: "Diseno", icon: "🎨" }
  ],
  properties: [
    {
      id: "p1",
      title: "Villa frente al mar",
      location: "Marbella, Espana",
      categoryId: "beach",
      imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 280,
      rating: 4.88
    },
    {
      id: "p2",
      title: "Loft contemporaneo",
      location: "Barcelona, Espana",
      categoryId: "design",
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 165,
      rating: 4.74
    },
    {
      id: "p3",
      title: "Casa de montana",
      location: "Andorra la Vella",
      categoryId: "cabins",
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 190,
      rating: 4.81
    },
    {
      id: "p4",
      title: "Mansion con piscina infinita",
      location: "Ibiza, Espana",
      categoryId: "luxury",
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 540,
      rating: 4.96
    },
    {
      id: "p5",
      title: "Apartamento urbano premium",
      location: "Madrid, Espana",
      categoryId: "trending",
      imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 145,
      rating: 4.67
    },
    {
      id: "p6",
      title: "Refugio junto al lago",
      location: "Asturias, Espana",
      categoryId: "beach",
      imageUrl: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 210,
      rating: 4.84
    },
    {
      id: "p7",
      title: "Penthouse de lujo",
      location: "Valencia, Espana",
      categoryId: "luxury",
      imageUrl: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 390,
      rating: 4.91
    },
    {
      id: "p8",
      title: "Cabana minimalista",
      location: "Granada, Espana",
      categoryId: "cabins",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 175,
      rating: 4.79
    }
  ]
};

export function getHomeDataset(): HomeDataset {
  return HOME_DATASET;
}
