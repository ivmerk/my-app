
export type AdditionalService = {
  name: string
  price: number
  condition: string
}

export type Price = {
  value: number
  condition: string
}

type Image = {
  url: string
  mediaType: number
}

type Video = {
  url: string
  mediaType: number
}

export type Media = {
  images: Image[]
  video: Video[]
}


export type CreateNotice = {
  title: string
  description: string
  media: {
    images: {url: string, mediaType: number}[]
    video: {url: string, mediaType: number}[]
  }
  availability: string
  price: Price | number
  additionalService: AdditionalService[]
  address: string
  isOnline: boolean
  phone: string
  isPrivateMessageAvailable: boolean
  category: string[]
}

