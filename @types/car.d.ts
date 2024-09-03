export {CarType}

declare global {
  interface CarType {
    id: number
    make: string
    model: string
    year: number
    mileage: number
    price: string
    image: string
    isFeatured: boolean
  }
}
