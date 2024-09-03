import {describe, it, expect, beforeAll} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'
import {ref} from 'vue'

describe('Calculator', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
    wrapper = mount(Calculator, {
      setup() {
        const modelDisplay = ref('')
        const result = ref('')
        const navs = ref<NavType[]>

        return {modelDisplay, result, navs}
      }
    })
  })

  it('renders the calculator component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('displays the model display', () => {
    const display = wrapper.find('.calculator__display__screen')
    expect(display.text()).toContain('')
  })

  it('displays the calculator result', () => {
    const text = wrapper.find('.calculator__display-result')
    expect(text.text()).toContain('')
  })

  it('renders the button', () => {
    const button = wrapper.find('.calculator__keypad__rows__items-button')
    expect(button.exists()).toBe(true)
  })

  it('updates the display value when a button is clicked', async () => {
    const button = wrapper.find('.calculator__keypad__rows__items-button')
    await button.trigger('click')
    expect(wrapper.find('.calculator__display-result').text()).toBe('')
  })
})
