enum advanceOperators {
  COS = 'cos',
  SIN = 'sin',
  TAN = 'tan'
}

interface CalculatorType {
  operators: string[]
  calculateBasic: (data: string) => number
  advanced: (doperator: string, value: number) => number
  advanceOperators: typeof advanceOperators
  opReg: RegExp
}

/**
 * Returns an object with methods to perform basic and advanced calculations.
 *
 * @returns An object with the following properties:
 * - `calculateBasic`: A function that takes a string expression and returns the result of the calculation.
 * - `operators`: An array of strings containing the operators supported by the `calculateBasic` function.
 * - `advanced`: A function that takes a string operator and a number value and returns the result of the calculation.
 * - `advanceOperators`: An object with the following properties:
 *   - `COS`: A string representing the cosine operator.
 *   - `SIN`: A string representing the sine operator.
 *   - `TAN`: A string representing the tangent operator.
 * - `opReg`: A regular expression that matches any of the operators supported by the `calculateBasic` function.
 */
export default function calculator(): CalculatorType {
  let operators = ['x', '÷', '+', '-'],
    opReg = /[÷x+-]/

  /**
   * Calculates a basic expression using the following operators:
   * - `+`
   * - `-`
   * - `x`
   * - `÷`
   * @param expression A string representing the expression to be calculated.
   * @throws An error if the expression is invalid.
   * @returns The result of the calculation, rounded to 2 decimal places.
   */
  const calculateBasic = (expression: string): number => {
    const [operand1, operand2] = expression.split(opReg)
    const operator = expression.match(opReg)?.[0]

    if (!operand1 || !operator || !operand2) {
      throw new Error(`${expression} is an invalid entries!`)
    }

    if (!operand1 || !operator || !operand2) {
      throw new Error(`Invalid expression: ${expression}`)
    }

    const num1 = Number(operand1)
    const num2 = Number(operand2)
    let result = 0

    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case 'x':
        result = num1 * num2
        break
      case '÷':
        result = num1 / num2
        break
      default:
        throw new Error(`Invalid operator: ${operator}`)
    }

    return Math.round(result * 100) / 100
  }

  /**
   * Perform an advanced calculation.
   * @param operator The operator to use, one of 'cos', 'sin', or 'tan'.
   * @param value The value to use in the calculation.
   * @returns The result of the calculation.
   */
  const advanced = (operator: string, value: number): number => {
    let result = 0

    switch (operator) {
      /**
       * Calculate the cosine of the given value.
       */
      case advanceOperators.COS:
        result = Math.cos(Number(value))
        break
      /**
       * Calculate the sine of the given value.
       */
      case advanceOperators.SIN:
        result = Math.sin(Number(value))
        break
      /**
       * Calculate the tangent of the given value.
       */
      case advanceOperators.TAN:
        result = Math.tan(Number(value))
        break
    }

    return Math.round(result * 1000) / 1000
  }

  return {
    calculateBasic,
    operators,
    advanced,
    advanceOperators,
    opReg
  }
}
