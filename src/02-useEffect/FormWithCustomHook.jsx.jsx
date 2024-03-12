import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const newForm =  {
        email: '',
        username: '',
        password: ''
    }

    const { username, email, password, onInputChange, onResetForm} = useForm(newForm)

    // const { username, email, password } = formState;
    
    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">
            Reset
            </button>
        
        </>
    )
}
