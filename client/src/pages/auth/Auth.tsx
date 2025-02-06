import './Auth.scss';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <main>
            <div className="auth-container">
                <div className="image-container">
                    <div className="sqr-cont"></div>
                </div>
                <div className="form-container">
                    <div>
                        <h2 className="fancy-title mb-4">
                            Conecte-se e conheça novas pessoas
                        </h2>
                        <h3 className="fancy-title mb-3">Junte-se agora</h3>
                        <div className="select-auth">
                          <span className='btn btn-outline btn-w-medium btn-round mt-2'>
                            Logar com google
                          </span>
                          <hr />
                          <Link to="/auth/register" className='btn btn-fill btn-primary btn-w-medium btn-round mt-2'>
                            Criar conta
                          </Link>
                        </div>
                        <div className='sign-in'>
                          <h5>Ja esta cadastrado?</h5>
                          <Link to='/auth/login' className='btn btn-outline btn-w-medium btn-round mt-2'>Entrar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Auth;
