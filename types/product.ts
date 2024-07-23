import { Category } from "./category";
import { Comment } from "./comment";
import { Image } from "./image";
import { Video } from "./video";

export type Product = {
  id: number;
  title: string;
  description: string;
  media: {
    images: Image[];
    video: Video[];
  };
  availability: string;
  price: number;
  isFavorite: boolean;
  isInCart: boolean;
  isArchive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  rating: number;
  priceList: [];
  reviews: [];
  questions: [];
  quantity: number;
  comments: Comment[];
  termsOfDelivery: string;
  category: Category;
  salesQty: number;
};
