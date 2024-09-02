import {defineStore} from 'pinia'

export const carStore = defineStore('car', {
  state: () => ({
    isLoading: false,
    cars: [] as CarType[],
    latestCars: [] as CarType[]
  }),
  getters: {},
  actions: {
    async fetchCars() {
      try {
        this.isLoading = true
        const [responseA, responseB] = await Promise.all([
          fetch('/api/cars'),
          fetch('/api/cars/latest')
        ])
        const dataA = await responseA.json()
        this.cars = dataA.cars as CarType[]

        const dataB = await responseB.json()
        this.latestCars = dataB.cars as CarType[]
      } catch (error) {
        console.error('Error fetching cars:', error)
      } finally {
        setTimeout(() => {
          this.isLoading = false
        }, 3000)
      }
    }
  }
})
