import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Footer from '../../../../components/layout/default/Footer.vue'

describe('Footer', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Footer)
  })

  it('renders the footer component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('displays the footer', () => {
    const footer = wrapper.find('.default-footer__rest-space')
    expect(footer.text()).toContain('© 2024 | All Rights Reserved')
  })
})
