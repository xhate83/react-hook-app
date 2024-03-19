import { fireEvent } from '@testing-library/react'
import { render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas componente LoginPage', () => {

    const user = {
        id: 1,
        name: 'Julian'
    }

    const userLogin = {id: 123, name: 'Julian', email: 'julian@gmail.com'}

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )
       

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
       
    });

    test('debe dar click y poner el usuario', () => {

        const setUserMock = jest.fn(); 

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith(userLogin);
    })

})