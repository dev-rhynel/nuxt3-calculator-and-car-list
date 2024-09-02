import {createServer, Factory, Model, Response} from 'miragejs'

// Define and configure MirageJS server
export function makeServer({environment = 'development'} = {}) {
  return createServer({
    environment,

    models: {
      car: Model.extend({})
    },

    factories: {
      car: Factory.extend({
        name(i: number) {
          return `car ${i}`
        }
      })
    },

    seeds(server) {
      server.create('car', {
        id: 1,
        make: 'Lamborghini',
        model: 'Huracán A',
        year: 2024,
        mileage: 341,
        price: '$15,000',
        image: '/cars/lambo-1.png'
      } as any)

      server.create('car', {
        id: 2,
        make: 'Lamborghini',
        model: 'Huracán E',
        year: 2024,
        mileage: 341,
        price: '$53,000',
        image: '/cars/lambo-5.png'
      } as any)

      server.create('car', {
        id: 3,
        make: 'Lamborghini',
        model: 'Huracán C',
        year: 2024,
        mileage: 341,
        price: '$663,000',
        image: '/cars/lambo-3.png'
      } as any)

      server.create('car', {
        id: 4,
        make: 'Lamborghini',
        model: 'Huracán G',
        year: 2024,
        mileage: 341,
        price: '$663,000',
        image: '/cars/lambo-7.png'
      } as any)

      server.create('car', {
        id: 5,
        make: 'Lamborghini',
        model: 'Huracán F',
        year: 2024,
        mileage: 341,
        price: '$53,000',
        image: '/cars/lambo-6.png'
      } as any)

      server.create('car', {
        id: 6,
        make: 'Lamborghini',
        model: 'Huracán D',
        year: 2019,
        mileage: 5446,
        price: '$53,000',
        image: '/cars/lambo-4.png'
      } as any)

      server.create('car', {
        id: 7,
        make: 'Lamborghini',
        model: 'Revuelto',
        year: 2024,
        mileage: 40000,
        price: '$55,000',
        image: '/cars/revuelto.jpg'
      } as any)

      server.create('car', {
        id: 8,
        make: 'Lamborghini',
        model: 'Aventador',
        year: 2023,
        mileage: 40000,
        price: '$44,000',
        image: '/cars/aventador.jpg'
      } as any)

      server.create('car', {
        id: 9,
        make: 'Lamborghini',
        model: 'Huracán B',
        year: 2022,
        mileage: 20000,
        price: '$18,000',
        image: '/cars/lambo-2.png'
      } as any)

      server.create('car', {
        id: 10,
        make: 'Lamborghini',
        model: 'Gallardo',
        year: 2019,
        mileage: 40000,
        price: '$43,000',
        image: '/cars/gallardo.jpg'
      } as any)
    },

    routes() {
      this.namespace = 'api'

      this.get('/cars', (schema: any) => schema.all('car'))

      this.get('/cars/latest', (schema: any) => schema.all('car').slice(0, 5))
    }
  })
}
