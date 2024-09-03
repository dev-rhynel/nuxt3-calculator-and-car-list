<script lang="ts" setup>
import {useToast} from './ui/toast/use-toast'

const row1 = ref<string[]>(['cos', 'sin', 'tan'])
const row2 = ref<(number | string)[]>([7, 8, 9, '0', 'x'])
const row3 = ref<(number | string)[]>([4, 5, 6, '-', '÷'])
const row4 = ref<(number | string)[]>([1, 2, 3, '.', '+'])

const modelDisplay = ref<string>('')
const isDisplayResult = ref(false)
const result = ref<string>()
const isResolved = ref(false)

const {operators, calculateBasic, advanced, opReg} = calculator()
const {toast} = useToast()

/**
 * Perform a basic calculation by appending a value to the display value.
 * @param value The value to append to the display value.
 */
const performBasicCalculation = (value: string | number) => {
  if (modelDisplay.value.length >= 12) {
    return toast({
      title: 'Uh oh! Something went wrong.',
      description: 'The maximum display value is 12 characters.',
      variant: 'destructive'
    })
  }

  //  Prevent 0 entry when modelDisplay is empty
  if (value == '0' && !modelDisplay.value) return

  //  Prevent multiple operator entries
  if (
    operators.some(opt => modelDisplay.value?.includes(opt)) &&
    operators.includes(value as string)
  ) {
    // When switching operators
    if (operators.includes(modelDisplay.value[modelDisplay.value.length - 1])) {
      modelDisplay.value = modelDisplay.value.slice(0, -1) + value
    }
    return
  }

  //  Prevent multiple dots entries
  if (modelDisplay.value.includes('.') && value === '.') return

  //  When double or dot entries
  if (typeof value === 'number' || value === '.') {
    if (modelDisplay.value?.includes(operators.join('|'))) {
      modelDisplay.value += value
      return
    }
    modelDisplay.value = modelDisplay.value
      ? `${modelDisplay.value}${value}`
      : `${value}`
    return
  }

  // Initialize display value if it doesn't exist
  modelDisplay.value = modelDisplay.value || '0'

  // Append value to display value
  modelDisplay.value += value
  isResolved.value = false
}

/**
 * Calculates the value of the current display value.
 */
const calculate = () => {
  if (
    modelDisplay.value &&
    operators.some(opt => modelDisplay.value?.includes(opt))
  ) {
    const [a, b] = modelDisplay.value.split(opReg)

    if (!a || !b) {
      return toast({
        title: 'Uh oh! Something went wrong.',
        description: `"${modelDisplay.value}" is an invalid calculator entry!`,
        variant: 'destructive'
      })
    }

    result.value = modelDisplay.value + ' ='
    modelDisplay.value = calculateBasic(modelDisplay.value).toString()

    isDisplayResult.value = true
    isResolved.value = true
  }
}

/**
 * Perform advanced calculation by taking the current value of the display,
 * performing the given operation, and displaying the result.
 * @param operator - The advanced operator to perform. One of 'cos', 'sin', or 'tan'.
 */
const performAdvancedCalculation = (operator: string) => {
  if (modelDisplay.value.length > 18 || !modelDisplay.value) return

  result.value = `${operator}(${modelDisplay.value}) =`
  modelDisplay.value = advanced(
    operator,
    Number(modelDisplay.value || 0)
  ).toString()

  isDisplayResult.value = true
  isResolved.value = true
}

const resetDisplay = (isAllClear: boolean = false) => {
  if (isAllClear) {
    modelDisplay.value = ''
    result.value = ''
    isDisplayResult.value = false
    return
  }

  modelDisplay.value = modelDisplay.value.slice(0, -1)

  if (!modelDisplay.value) return
  if (isResolved.value) {
    // Move display to result
    result.value = '= ' + result.value?.replace('=', '')
    modelDisplay.value = ''
    isResolved.value = false
    return
  }
}
</script>

<template>
  <div class="calculator">
    <h3 class="text-2xl text-center font-bold text-red-500">
      Calc<span class="text-primary-foreground">ulator</span>
    </h3>
    <div class="calculator__display">
      <div class="calculator__display-result">
        <p :class="['text-3xl', {active: isDisplayResult}]">{{ result }}</p>
      </div>
      <div class="calculator__display__screen-wrapper">
        <input
          type="text"
          :value="modelDisplay"
          placeholder="0"
          :autofocus="true"
          readonly
          class="calculator__display__screen"
        />
      </div>
    </div>
    <div class="calculator__keypad">
      <div class="calculator__keypad__column">
        <div class="calculator__keypad__rows">
          <div class="calculator__keypad__rows__items">
            <button @click="resetDisplay()">CE</button>
            <button @click="resetDisplay(true)">C</button>
            <button
              v-for="n in row1"
              :key="n"
              @click="performAdvancedCalculation(n)"
            >
              {{ n }}
            </button>
          </div>
          <div class="calculator__keypad__rows__items">
            <button
              class="calculator__keypad__rows__items-button"
              v-for="n in row2"
              :key="n"
              @click="performBasicCalculation(n)"
            >
              {{ n }}
            </button>
          </div>
          <div class="calculator__keypad__rows__items">
            <button
              class="calculator__keypad__rows__items-button"
              v-for="n in row3"
              :key="n"
              @click="performBasicCalculation(n)"
            >
              {{ n }}
            </button>
          </div>
          <div class="calculator__keypad__rows__items">
            <button
              class="calculator__keypad__rows__items-button"
              v-for="n in row4"
              :key="n"
              @click="performBasicCalculation(n)"
            >
              {{ n }}
            </button>
            <button
              class="calculator__keypad__rows__items-button"
              @click="calculate"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator {
  @apply bg-slate-600 rounded-2xl shadow-2xl pt-12 mt-12;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 12px 0 0 0;
  max-width: 500px;
  margin: 12px auto;
  &__display {
    @apply relative mt-[12px] text-end;
    background-color: #fbf9f9b9;
    color: hsl(var(--accent-foreground));
    border-radius: 4px 4px 12px 12px;
    height: 120px;
    .operator {
      @apply text-sm font-bold text-gray-500 absolute;
      top: 15px;
      left: 20px;
    }
    &__screen-wrapper {
      min-height: 100px;
      input {
        @apply text-end pr-4;
        font-family: 'Courier';
        background-color: transparent;
        color: hsl(var(--primary));
        width: 100%;
        height: 100px;
        border: none !important;
        font-size: 66px;
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: hsl(var(--primary));
        }
      }
    }
    &-result {
      font-size: 12px;
      height: 30px;
      background-color: transparent;
      color: hsl(var(--primary));
      padding-right: 25px;
      border-radius: 0 0 20px 20px;
      p {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        padding-top: 44px;
        font-size: 52px;
        font-weight: 700;
        font-family: 'Courier';
        &.active {
          transform: translateY(-32px);
          visibility: visible;
          font-size: 28px;
          opacity: 0.5 !important;
        }
      }
    }
  }

  &__keypad {
    @apply grid gap-0 px-4 pb-6 pt-12;
    &__column {
      @apply grid grid-cols-12;
    }
    &__rows {
      @apply col-span-12;
      &__items {
        @apply grid grid-cols-10 gap-3 my-4 cursor-pointer;
        button {
          @apply col-span-2 h-12 text-lg rounded-full text-center shadow;
          background-color: hsl(var(--muted-foreground));
          color: hsl(var(--secondary));
          border: 3xp solid #fff !important;
          transition: all 0.03s ease-in-out;
          &:active {
            transform: translateY(4px);
            @apply bg-red-500;
          }
        }
      }
    }
  }
}
</style>
