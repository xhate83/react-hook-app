import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en multiple custom hooks', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement
    });


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText('Información Pokemon') ).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('debe mostrar el pokemon', () => {

        useFetch.mockReturnValue({
            data: {
                id: 'id1',
                name: "Bulbasaur",
                sprites: {
                    back_default: "https://imagen.com/image1.jpg",
                    front_default: "https://imagen.com/image2.jpg", 
                    back_shiny: "https://imagen.com/image3.jpg",
                    front_shiny: "https://imagen.com/image4.jpg"
                }
            },
            isLoading: false,
            hasError: null,
        })

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('{"width":0,"height":0}') ).toBeTruthy();
        expect(screen.findByText ('Bulbasaur')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('debe llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: {
                id: 'id1',
                name: "Bulbasaur",
                sprites: {
                    back_default: "https://imagen.com/image1.jpg",
                    front_default: "https://imagen.com/image2.jpg", 
                    back_shiny: "https://imagen.com/image3.jpg",
                    front_shiny: "https://imagen.com/image4.jpg"
                }
            },
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled()

    })
 })