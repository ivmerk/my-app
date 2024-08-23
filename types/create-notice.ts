
type AdditionalService = {
  name: string
  price: number
  condition: string
}
export type CreateNotice = {
  title: string
  description: string
  media: {
    images: {url: string, mediaType: number}[]
    video: {url: string, mediaType: number}[]
  }
  availability: string
  price: {value: number, condition: string} | number
  additionalService: AdditionalService[]
  address: string
  isOnline: boolean
  phone: string
  isPrivateMessageAvailable: boolean
  category: string[]
}

