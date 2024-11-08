import { Address } from "./address";
import { Favorites } from "./favorites";

export type Profile = {
  avatar: string,
  createdAt: string, 
  customerType: number,
  deletedAt: string | null, 
  displayName: string, 
  domainEvents: [{}],
  favorites: Favorites[],
  firstName:string, 
  id: number,  
  isBlocked: boolean,
  isDeleted: boolean, 
  isVerified: boolean,
  lastName:  string,
  login: string, 
  patronymic: string, 
  phones: [],
  profileCheck: {},
  rating: number,
  reviewsCount: number,
  roles: [],
  services:{
    count: number,
    data:Service [],
  };
    state: number,
  statistics: {
    categories: Category[],
    activeServices: number,
    archivesSerivces: number,
    inactivesServices: number,
    unarchivesSerivces: number },
  uid: string,
  updatedAt: string,
  userUid: string,
  verificationCode: string,
}


type Category = {
  name: string,
  slug: string,
  uid: string
}

type Service = {
  address: Address, 
  author: string,
  categoryUid: string,
  created_at: string,
  deleted_at: string | null
  description: string, 
  images: string[],
  is_active: boolean,
  is_archive: boolean,
  price: number,
  price_list: []
  rating: number, 
  reviews: []
  reviews_count: number,
  slug: string,
  title: string,
  uid: string,
  updated_at: string | null
}

