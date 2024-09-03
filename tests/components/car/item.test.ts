import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import CarItem from '../../../components/car/Item.vue'
import {ref} from 'vue'

describe('CarItem', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(CarItem, {
      props: {
        car: {
          id: 1,
          make: 'Lamborghini',
          model: 'Huracán A',
          year: 2024,
          mileage: 341,
          price: '$15,000',
          image: '/cars/lambo-1.png'
        } as CarType,
        isLoading: false
      }
    })
  })

  it('renders the car item component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('car props should work properly', async () => {
    expect(CarItem.props.car.default).toBeTruthy
  })

  it('car props should work properly', async () => {
    expect(CarItem.props.isLoading.default).toBeTruthy
  })

  it('car renders with correct car prop', () => {
    expect((wrapper.props() as {car: CarType}).car).toBeTruthy
  })

  it('car renders with correct isLoading prop', () => {
    expect((wrapper.props() as {isLoading: boolean}).isLoading).toBeFalsy
  })
})
