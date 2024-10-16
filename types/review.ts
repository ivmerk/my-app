import { Answer } from "./answer"
import { Image } from "./image"
import { Video } from "./video"

export type Review = {
  uid: string, 
  text: string,
  images: Image [],
  video: Video [],
  rating: number,
  created_at: string, 
  user: string,
  answer: Answer | null, 
}
