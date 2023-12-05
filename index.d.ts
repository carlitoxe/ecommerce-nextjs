type TProductId = number
type Url = string
type rating = {
    rate: number
    count: number
}

type TProduct = {
    id: TProductId
    title: string
    price: number
    description: string
    category: string
    image: Url
    rating: rating
}