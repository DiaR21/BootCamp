
/*
const {sumar}=require('./calculadora');
describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de sumar', ()=>{
        expect(sumar(3,5)).toBe(8);
    })
})
*/
const {restar}=require('./calculadora');

describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de restar', ()=>{
        expect(restar(5,3)).toBe(2);
    })
})
