export type ServiceCardInList = {
  address: {
    city: string;
    coordinates: [number, number];
    raw: string;
    street: string;
  }
  author: string | undefined; 
  category: {
    name: string;
    slug: string;
    uid: string;
    parent: {
      name: string;
      slug: string;
      uid: string;
    }
  }

  description: string | undefined;
  images: string | undefined;
  isFavorite: boolean;
  price: number;
  rating: number;
  reviewsCount: number;
  slug: string;
  title: string;
  uid: string;
  video: string | undefined;
}
