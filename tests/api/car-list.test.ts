import {describe, it, expect, beforeAll, afterAll} from 'vitest'
import {createServer, Model} from 'miragejs'

describe('CarList', () => {
  let mirageServer: any

  beforeAll(() => {
    mirageServer = createServer({
      models: {
        car: Model
      },

      seeds(server) {
        server.create('car', {
          id: 1,
          make: 'Lamborghini',
          model: 'Huracán A',
          year: 2024,
          mileage: 341,
          price: '$15,000',
          image: '/cars/lambo-1.png',
          featured: true,
          type: 'supercar'
        } as any)

        server.create('car', {
          id: 2,
          make: 'Lamborghini',
          model: 'Huracán E',
          year: 2024,
          mileage: 341,
          price: '$53,000',
          image: '/cars/lambo-5.png',
          featured: false,
          type: 'supercar'
        } as any)
      },

      routes() {
        this.namespace = 'api'

        this.get('/cars/:filter', (schema, request) => {
          const {filter} = request.params
          if (!filter || filter === 'all') {
            return schema.cars.all()
          }
          return schema.cars.where({type: filter})
        })
        this.get('/cars', (schema, request) => {
          return schema.cars.all()
        })

        this.get('/cars/featured', (schema, request) => {
          return schema.cars.where({featured: true})
        })
      }
    })
  })

  it('should display 1 car', async () => {
    const response = await fetch(`/api/cars/supercar`)
    const {cars} = await response.json()
    expect(cars.length).toBe(2)
  })

  it('should display no cars', async () => {
    const response = await fetch(`/api/cars/error`)
    const {cars} = await response.json()
    expect(cars.length).toBe(0)
  })

  it('should display featured cars', async () => {
    const response = await fetch(`/api/cars/featured`)
    const {cars} = await response.json()
    expect(cars.length).toBe(1)
  })
})
