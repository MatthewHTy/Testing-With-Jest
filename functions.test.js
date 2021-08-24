

const {returnTwo, returnGreeting, returnAdd, returnMultiply, returnDivide, returnSubtract} = require('./functions')

test('Should return a two', () => {
    expect(returnTwo()).toEqual('2.')
})

test('Should return a greeting', () => {
    expect(returnGreeting('James')).toEqual('Hello, James.')

    expect(returnGreeting('Jill')).toEqual('Hello, Jill.')
})

describe('Math Function', ()=> {

    test('Should expect num1+num2 to equal num3', () => {
        expect(returnAdd(1, 2)).toEqual(3)
        
        expect(returnAdd(5, 9)).toEqual(14)
    })
    
    test('Should expect num1*num2 to equal num3', () => {
        expect(returnMultiply(1,2)).toEqual(2)
        
        expect(returnMultiply(5,9)).toEqual(45)
    })
    
    test('Should expect num2/num1 to equal num3', () => {
        expect(returnDivide(1,2)).toEqual(0.5)
        
        expect(returnDivide(10,5)).toEqual(2)
    })
    
    test('Should expect num1 - num2 to equal num3', () => {
        expect(returnSubtract(1,2)).toEqual(-1)
        
        expect(returnSubtract(5,9)).toEqual(-4)
    })
})