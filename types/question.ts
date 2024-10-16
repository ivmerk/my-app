import { Answer } from "./answer"

export type Question = {
    text: string,
    answers: Answer[],
    createdAt: string,
    user: string
  }
