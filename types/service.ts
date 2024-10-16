import { Address } from "./address";
import { Category } from "./category";
import { Image } from "./image";
import { Video } from "./video";

export  type  Service = {
    id: number;
    title: string; 
    address: Address;
    description: string;
    media: {
      images: Image[];
      video: Video[];
    };
    price: number;
    priceType: number;
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
    uid: string;
    domainEvents: [];
    category: Category; 
  };

