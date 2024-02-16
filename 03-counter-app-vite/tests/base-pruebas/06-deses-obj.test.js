import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas a 06-deses-obj', () => { 
    test('usContext debe retornar un objeto', () => { 
        
        const userTest = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const { nombreClave, anios, latlng: { lat, lng } } = usContext({
            clave: 'Ironman',
            nombre: 'Tony Stark',
            edad: 45
        });

        expect(userTest).toEqual({
            nombreClave,
            anios,
            latlng: {
                lat,
                lng
            }
        });
     })
 })