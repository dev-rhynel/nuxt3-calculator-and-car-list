import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import ListCarousel from '@/components/car/ListCarousel.vue'
import {ref} from 'vue'

describe('CarItem', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(ListCarousel, {
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
        isLoading: false,
        title: 'Car Title'
      }
    })
  })

  it('renders the car item component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('cars props should work properly', async () => {
    expect(ListCarousel.props.cars.default).toBeTruthy
  })

  it('Is loading props should work properly', async () => {
    expect(ListCarousel.props.isLoading.default).toBeTruthy
  })

  it('Title prop should work properly', async () => {
    expect(ListCarousel.props.title.default).toBeTruthy
  })

  it('car renders with correct car prop', () => {
    expect((wrapper.props() as {cars: CarType[]}).cars).toBeTruthy
  })

  it('car renders with correct isLoading prop', () => {
    expect((wrapper.props() as {isLoading: boolean}).isLoading).toBeFalsy
  })
})
