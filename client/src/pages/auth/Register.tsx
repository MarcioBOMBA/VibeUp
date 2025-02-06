import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { InputText } from '../../components/inputs/InputText';

const Register = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formStep, setFormStep] = useState(0);

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const inputs = Object.fromEntries(form.entries());
        console.log(inputs);
        return;
    };

    return (
        <main>
            <div className="sign-in-container d-flex justify-content-center align-items-center flex-column">
                <div className="container-xl">
                    <div className="form-title">
                        <h2 className="text-center">Crie sua conta</h2>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleRegister}>
                            <div
                                className={`form-content ${
                                    formStep ? 'active' : ''
                                }`}
                            >
                                <div className="form-part">
                                    <InputText
                                        label="Nome de usuário"
                                        name="username"
                                        placeholder="username"
                                        error={errors.username}
                                    />
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
                                    <button
                                        type="submit"
                                        className="btn btn-fill btn-primary btn-w-medium btn-round mt-4"
                                        onClick={() => setFormStep(1)}
                                    >
                                        Avançar
                                    </button>
                                </div>
                                <div className="form-part pt-4">
                                    <button
                                        className="row-back-arrow"
                                        onClick={() => setFormStep(0)}
                                    >
                                        <FaArrowLeft /> Voltar
                                    </button>
                                    <InputText
                                        label="Universidade"
                                        name="university"
                                        placeholder="USP"
                                        error={errors.university}
                                    />
                                    <InputText
                                        label="Curso"
                                        name="course"
                                        placeholder="Ciência da Computação"
                                        error={errors.course}
                                    />
                                    <button className="btn btn-fill btn-primary btn-w-medium btn-round mt-4">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                            <span className="w-100 text-center mt-4 d-block">
                                Já tem uma conta?{' '}
                                <Link to="/auth/login">Entre</Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
