import { Comment } from "./Comment";

export type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  isAvailable: boolean;
  price: number;
  isFavorite: boolean;
  isInCart: boolean;
  quantity: number;
  comments: Comment[];
  termsOfDelivery: string;
  category: string;
  rating: number;
  reviews: number;
  selesQty: number;
};
