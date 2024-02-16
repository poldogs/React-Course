import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('PRuebas en 07-deses-arr', () => { 
    test('Debe retornar un string y un número', () => { 
        const [letras, numeros] = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
 })