import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

    const initialValue = 10;
    
    test('de hacer match con el snapshot', () => { 
        const wrapper = render( <CounterApp value={ initialValue } /> );
        expect( wrapper ).toMatchSnapshot();
     })

    test('el valor inicial debe ser 100', () => { 
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText( 100 ) ).toBeTruthy();
        //expect( screen.getByRole('heading') ).toHaveTextContent('100');
     })

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('358') ).toBeTruthy();

        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });

    test('deben de funcionar todos los botones', () => { 
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('13') ).toBeTruthy();

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('12') ).toBeTruthy();

        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText( initialValue ) ).toBeTruthy();
     })




});