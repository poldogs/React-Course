import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('getHeroesByIdAsync debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => { 
                
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
             })
     })

    test('getHeroesByIdAsync debe retornar un error si el id no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(heroe => { 
                
                expect(heroe).toBe('No se pudo encontrar el héroe');

                done();
             })
     })
 })