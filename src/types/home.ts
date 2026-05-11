export interface HomeCategory {
  id: string;
  label: string;
  icon: string;
}

export interface HomeProperty {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  imageUrl: string;
  nightlyPrice: number;
  rating: number;
}

export interface HomeDataset {
  categories: HomeCategory[];
  properties: HomeProperty[];
}
