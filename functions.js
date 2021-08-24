

    module.exports = {
        returnTwo: () => {
            return `2.`
        },
        returnGreeting: (name) => {
            return `Hello, ${name}.`
        },
        returnAdd: (num1, num2) => {
            const sum = num1 + num2
            return sum
        },
        returnMultiply: (num1, num2) => {
            const mult = num1 * num2 
            return mult
        },
        returnDivide: (num1, num2) => {
            const div = num1 / num2
            return div
        },
        returnSubtract: (num1, num2) => {
            const sub = num1 - num2
            return sub
        }

    }