const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('should should return 2', ()=>expect(returnTwo()).toBe(2))
//  console.log(typeof returnTwo())
it('should expect greeting(x) to be = hello x', ()=>expect(greeting('Dax')).toBe('Hello, Dax'))

it('should expect num1 + num2 = sum', ()=>expect(add(1,2)).toBe(3))

describe('math functions', ()=>{
    it('should give sum of num1*num2',()=> expect(multiply(4,5)).toBe(20))
    it('should give the sum of num1/num2', ()=> expect(divide(6,2)).toBe(3))
    it('should give the sume of num1-num2', ()=> expect(subtract(3,2)).toBe(1))
})