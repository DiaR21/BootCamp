
const {sumar}=require('./calculadora');
describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de sumar', ()=>{
        expect(sumar(3,5)).toBe(8);
    })
})

const {restar}=require('./calculadora');
describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de restar', ()=>{
        expect(restar(5,3)).toBe(2);
    })
})

const {multiplicar}=require('./calculadora');
describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de multiplicar', ()=>{
        expect(multiplicar(5,3)).toBe(15);
    })
})

const {dividir}=require('./calculadora');
describe('Pruevas en el componenete calculadora', ()=>{
    test('Prueba de dividir', ()=>{
        expect(dividir(10,2)).toBe(5);
    })
})