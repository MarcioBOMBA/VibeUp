import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from '../../components/inputs/InputText';

type FormInputs = {
    email: string;
    password: string;
};

const Login = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const inputs = Object.fromEntries(form.entries());

        //todos os erros do formulário
        const newErrors: FormInputs = { email: '', password: '' };

        //validando email
        if (!inputs.email) {
            newErrors.email = 'Campo obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(inputs.email as string)) {
            newErrors.email = 'Digite um email válido';
        }

        //validando senha
        if (!inputs.password) {
            newErrors.password = 'Campo obrigatório';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        console.log(inputs);
        return;
    };

    return (
        <main>
            <div className="sign-in-container d-flex justify-content-center align-items-center flex-column">
                <div className="container-xl">
                    <div className="form-title">
                        <h2 className="text-center">Entre na sua conta</h2>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleLogin}>
                            <InputText
                                label="Email"
                                name="email"
                                placeholder="seu@email"
                                error={errors.email}
                            />
                            <InputText
                                label="Senha"
                                name="password"
                                tipo="password"
                                placeholder="sua senha"
                                error={errors.password}
                            />
                            <button className="btn btn-fill btn-primary btn-w-medium btn-round mt-4">
                                Entrar
                            </button>
                            <span className="w-100 text-center mt-4 d-block">
                                Não tem uma conta?{' '}
                                <Link to="/auth/register">Cadastre-se</Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
