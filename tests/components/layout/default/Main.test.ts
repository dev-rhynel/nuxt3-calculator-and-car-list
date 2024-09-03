import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Main from '@/components/layout/default/Main.vue'
import {ref} from 'vue'

describe('Main', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Main)
  })

  it('renders the Main component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
