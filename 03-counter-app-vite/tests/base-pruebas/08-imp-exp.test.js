import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp', () => { 
    test('getHeroeById debe retornar un heroe por id', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
     });

    test('id 100 debe ser undefined o null', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
        // toBeUndefined() es lo mismo que toBeNull() o toBeFalsy()
     })

    test('getHeroesByOwner de DC debe retornar un arreglo de tres', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
     })
    test('getHeroesByOwner de Marvel deben ser Spiderman y Wolverine', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman', 
                owner: 'Marvel'}, 
            {
                id: 5,
                name: 'Wolverine', 
                owner: 'Marvel'}
        ]);
     })
 })