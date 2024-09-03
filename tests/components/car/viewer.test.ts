import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Viewer from '../../../components/car/Viewer.vue'
import {ref} from 'vue'

describe('Viewer', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Viewer, {
      props: {
        car: {
          id: 1,
          make: 'Lamborghini',
          model: 'Huracán A',
          year: 2024,
          mileage: 341,
          price: '$15,000',
          image: '/cars/lambo-1.png'
        } as CarType
      }
    })
  })

  it('renders the car item component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('car props should work properly', async () => {
    expect(Viewer.props.car.default).toBeTruthy
  })

  it('car renders with correct car prop', () => {
    expect((wrapper.props() as {car: CarType}).car).toBeTruthy
  })
})
