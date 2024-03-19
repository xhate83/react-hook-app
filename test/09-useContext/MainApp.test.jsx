import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas componenten MainApp', () => { 
    
    test('debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
       );
       
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el loginpage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
       );
       
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('debe de mostrar el loginpage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
       );
       
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });

    test('debe de mostrar el loginpage', () => {
        render(
            <MemoryRouter initialEntries={['/ruta-errada']}>
                <MainApp />
            </MemoryRouter>
       );
       
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });

})