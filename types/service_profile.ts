import { Address } from "./address";
import { Category } from "./category";
import { Image } from "./image"; 
import { PriceList } from "./price-list";
import { Question } from "./question";
import { Review } from "./review";
import { Video } from "./video";

export type ServiceProject = {
  id: 0,
  uid: string, 
  domainEvents: [
  {}
],
  categoryUid: string,
  title: string,
  description: string,
  media: {
    images: Image[],
    videos: Video []
  },
  price: number,
  category: Category,
  isFavorite: boolean,
  isActive: boolean,
  isArchive: boolean,
  isDeleted: boolean,
  isFake: boolean,
  slug: string,
  createdAt:string, 
  updatedAt:string, 
  deletedAt: string,
  rating: number,
  priceList: PriceList[],
  reviews: Review[],
  reviewCount: number,
  questions: Question[],
  priceType: number,
  author: string,
  phone: string,
  address: Address,
  moderationState: number,
}
