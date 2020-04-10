const Quantia = require('../src/Quantia')

describe('Quantia', () => {
    describe('#negativo', () => {
        test('Verificar que -1 é negativo', () => {
            expect(new Quantia(-1).negativo()).toBeTruthy()
        })

        test('Verificar que 1 não é negativo', () => {
            expect(new Quantia(1).negativo()).toBeFalsy()
        })
    })

    describe('#unidade', () => {
        test('Verifica que 1 é unidade', () => {
            expect(new Quantia(1).unidade()).toBeTruthy()
        })
    })
})