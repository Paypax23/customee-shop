import "./loginPage.scss";
import loginPhoto from "../../assets/images/loginPhoto.png";
import { loginPageTextKeys } from "../../data/pageData";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/loginAction";
import { useNavigate } from "react-router";


function LoginPage() {
    const { t } = useTranslation()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const [error,setError] = useState([]);
    const navigate = useNavigate()
    const loginSelector = useSelector(state=>state.login);
    const signupListener = ()=>{
        if(password.length<8){
            
            setError([...(error ?? []), 'password']);

        }
        if(username.length<3){
             setError([...(error ?? []), 'username']);
        }
        if(username.length>3 && password.length>=8){
            console.log('OK')
            dispatch(logIn({username,password}));
            window.localStorage.setItem('user',username);
            navigate('/');
        }
    }
    
    
    return (
        <main className="page-container pageContainer">
            <h2>{t(loginPageTextKeys.welcome)}</h2>
            <LanguageSwitch></LanguageSwitch>
            <section className="login-container">
                <div className="form-container">
                    <h3>{t(loginPageTextKeys.loginSignUp)}</h3>
                    <div className="input-container">
                        <label htmlFor="username">{t(loginPageTextKeys.username)}</label>
                        <input className={error.includes('username')? 'error' :'' } onChange={(e)=>setUsername(e.target.value)} type="text" id="username" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">{t(loginPageTextKeys.password)}</label>
                        <input className={error.includes('password')? 'error' :'' } type="text" onChange={(e)=>{setPassword(e.target.value)}} id="password" />
                    </div>
                    <div className="forgot-container">
                        <p>{t(loginPageTextKeys.forgot)}</p>
                    </div>
                    <p>{t(loginPageTextKeys.term)}</p>
                    <div className="button-container">
                        <button onClick={()=>signupListener()} className="colored">{t(loginPageTextKeys.signUpButton)}</button>
                        <button>{t(loginPageTextKeys.loginWithGoogle)}</button>
                    </div>

                </div>
                <div>
                    <img src={loginPhoto} alt="login photo" />
                </div>
            </section>
        </main>
    );
}

export default LoginPage;