import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect(userTest).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const nombre = 'Leopoldo';
        const user = getUsuarioActivo(nombre);
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        
        expect(user).toEqual(userTest);

        // expect(user).toEqual({
        //     uid: 'ABC567',
        //     username: nombre
        // });
    })
})

