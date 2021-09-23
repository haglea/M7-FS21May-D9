import { Comment } from "./Comment"

export interface Dish {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: Comment[]
}