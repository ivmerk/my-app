import { Category } from "./category";
import { Image } from "./image";
import { Video } from "./video";

export  type  Service = {
    title: string; 
    description: string;
    media: {
      images: Image[];
      video: Video[];
    };
    price: number;
    isFavorite: boolean;
    isActive: boolean;
    isArchive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    rating: number;
    priceList: [];
    reviews: [];
    questions: [];
    id: number;
    uid: string;
    domainEvents: [];
    category: Category; 
  };
