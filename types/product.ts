import { Comment } from "./comment";

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  availability: string;
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
