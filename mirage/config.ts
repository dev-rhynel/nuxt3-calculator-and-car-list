import {createServer, Factory, Model, Response} from 'miragejs'

// Define and configure MirageJS server
export function makeServer({environment = 'development'} = {}) {
  return createServer({
    environment,

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
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 3,
        make: 'Lamborghini',
        model: 'Huracán C',
        year: 2024,
        mileage: 341,
        price: '$663,000',
        image: '/cars/lambo-3.png',
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 4,
        make: 'Lamborghini',
        model: 'Huracán G',
        year: 2024,
        mileage: 341,
        price: '$663,000',
        image: '/cars/lambo-7.png',
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 5,
        make: 'Lamborghini',
        model: 'Huracán F',
        year: 2024,
        mileage: 341,
        price: '$53,000',
        image: '/cars/lambo-6.png',
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 6,
        make: 'Lamborghini',
        model: 'Huracán D',
        year: 2019,
        mileage: 5446,
        price: '$53,000',
        image: '/cars/lambo-4.png',
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 7,
        make: 'Lamborghini',
        model: 'Revuelto',
        year: 2024,
        mileage: 40000,
        price: '$55,000',
        image: '/cars/revuelto.jpg',
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 8,
        make: 'Lamborghini',
        model: 'Aventador',
        year: 2023,
        mileage: 40000,
        price: '$44,000',
        image: '/cars/aventador.jpg',
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 9,
        make: 'Lamborghini',
        model: 'Huracán B',
        year: 2022,
        mileage: 20000,
        price: '$18,000',
        image: '/cars/lambo-2.png',
        featured: true,
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 10,
        make: 'Lamborghini',
        model: 'Gallardo',
        year: 2019,
        mileage: 40000,
        price: '$43,000',
        image: '/cars/gallardo.jpg',
        type: 'supercar'
      } as any)

      server.create('car', {
        id: 11,
        make: 'Nissan',
        model: 'Navara Pro 4X',
        year: 2023,
        mileage: 3200,
        price: '$23,000',
        image: '/cars/navara.jpeg',
        type: 'pickup'
      } as any)

      server.create('car', {
        id: 12,
        make: 'Toyota',
        model: 'Land Cruiser',
        year: 2023,
        mileage: 4200,
        price: '$63,000',
        image: '/cars/lc.jpeg',
        type: 'suv'
      } as any)

      server.create('car', {
        id: 13,
        make: 'Ford',
        model: 'Ranger Raptor',
        year: 2023,
        mileage: 1200,
        price: '$33,000',
        image: '/cars/raptor.jpeg',
        type: 'pickup'
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
}
