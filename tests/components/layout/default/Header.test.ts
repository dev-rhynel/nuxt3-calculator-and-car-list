import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Header from '../../../../components/layout/default/Header.vue'
import {ref} from 'vue'

describe('Header', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Header, {
      setup() {
        const modelDisplay = ref('')
        const result = ref('')

        return {modelDisplay, result}
      }
    })
  })

  it('renders the header component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('displays the header', () => {
    const header = wrapper.find('.default-header__logo')
    expect(header.text()).toContain('RHYNEL')
  })
})
