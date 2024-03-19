import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"



describe('Pruebas en el useCounter', () => { 

    test('Debe retornarn valores por defecto', () => { 

        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe retornar el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('Debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13);
    });

    test('Debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7);
    });

    test('Debe realizar el reset del contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;

        act(() => {
            decrement(2);
            reset();
        });
        expect(result.current.counter).toBe(10);
    })
})