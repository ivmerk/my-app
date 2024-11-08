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
  services: [] ;
}
