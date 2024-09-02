import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Navigation from '../../../../components/layout/default/Navigation.vue'
import {ref} from 'vue'

describe('Navigation', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Navigation, {
      setup() {
        const navs = ref<NavType[]>

        return {navs}
      },
      props: {
        navId: 1
      }
    })
  })

  it('renders the navigation component', () => {
    expect(wrapper.exists()).toBeTruthy
  })

  it('navigation props should work properly', async () => {
    expect(Navigation.props.navId.default).toBe(0)
  })

  it('navigation renders with correct navId prop', () => {
    expect((wrapper.props() as {navId: number}).navId).toBe(1)
  })
})
