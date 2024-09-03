import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import CarItems from '@/components/car/ListItems.vue'
import {ref} from 'vue'

describe('CarItem', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(CarItems, {
      props: {
        cars: [
          {
            id: 1,
            make: 'Lamborghini',
            model: 'Huracán A',
            year: 2024,
            mileage: 341,
            price: '$15,000',
            image: '/cars/lambo-1.png'
          }
        ] as CarType[],
        isLoading: false
      }
    })
  })

  it('renders the car item component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('car props should work properly', async () => {
    expect(CarItems.props.cars.default).toBeTruthy
  })

  it('car props should work properly', async () => {
    expect(CarItems.props.isLoading.default).toBeTruthy
  })

  it('car renders with correct car prop', () => {
    expect((wrapper.props() as {cars: CarType[]}).cars).toBeTruthy
  })

  it('car renders with correct isLoading prop', () => {
    expect((wrapper.props() as {isLoading: boolean}).isLoading).toBeFalsy
  })
})
