import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = () => {
    // State to manage the active/inactive state of the container
    const [isActive, setIsActive] = useState(false);

    // Handler to switch to signup (activate container)
    const handleRegister = () => {
        setIsActive(true);
    };

    // Handler to switch to login (deactivate container)
    const handleLogin = () => {
        setIsActive(false);
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Creer un compte</h1>
                    <input type="text" placeholder="Nom et Prenom" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="mot de passe" />
                    <input type="password" placeholder="confirmer mot de passe" />
                    <button>S'inscrire</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Se connecter</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="mot de passe" />
                    <a href="#">mot de passe oublié?</a>
                    <button>Se connecter</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Deja membre!</h1>
                        <p>cliquer sur le boutton pour se connecter</p>
                        <button 
                            className="hidden" 
                            id="login"
                            onClick={handleLogin}
                        >
                            Se connecter
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Pas de compte!</h1>
                        <p>
                            Cliquer sur le boutton pour creer un compte
                        </p>
                        <button 
                            className="hidden" 
                            id="register"
                            onClick={handleRegister}
                        >
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;