import React, { useState, useEffect, useContext, useRef } from "react";
import { ContainerPage, ContainerText, FormLogin, Image, SectionLeft, SectionRight } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import { colors } from "../../utils/colors";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import Button from "../Button";
import image from "../../assets/img-todolist.png";
import Links from "../Links";
import TitleSecundary from "../TitleSecundary";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { login, setIdUser, setUserName } from "../../utils/auth";
import AuthContext from "../../context/authProvider";
import Loading from "../Loading";
import SubHeader from "../SubHeader";

export default function Home() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroMsg, setErroMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }

    }, []);
    useEffect(() => {
        setErroMsg('');
    }, [email, password]);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePass = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        }
        try {
            setIsLoading(true);
            const response = await api.post("/auth/login", data);
            if (response.status === 200) {
                setAuth({ email, password, token });
                setEmail('');
                setPassword('');
                setErroMsg('');
                login(response.data.token);
                setIdUser(response.data.user.user_id);
                setUserName(response.data.user.name);
                setIsLoading(false);
                navigate("/tasks");
            }

        } catch (error) {
            console.log(error);
            setIsLoading(false);
            if (!error?.response) {
                setErroMsg('No Server Response');
            } else if (error.response.data.error === 'missing_fields') {
                setErroMsg('Preencha todos os campos!');
            } else if (error.response?.status === 401) {
                setErroMsg('Usuário ou senha inválido!');
            } else {
                setErroMsg('Login Falhou!');
            }
        }


    };
    return (
        <ContainerPage>
            <SectionLeft>
                <Image src={image} />
            </SectionLeft>
            <SectionRight>
                <SubHeader />
                <TitleSecundary text="LOGIN" color={colors.primary} size='2rem' />
                <FormLogin onSubmit={handleSubmit} >
                    <InputText
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChangeEmail}
                        ref={emailRef}
                    />
                    <InputPassword
                        placeholder="Senha"
                        value={password}
                        onChange={handleChangePass}
                    />
                    {erroMsg && <TextPrimary size='0.6rem' text={erroMsg} align='left' color='red' />}
                    {isLoading ? <Loading /> : <Button type="submit" text="ENTRAR" textColor={colors.dark_mode} bgColor={colors.primary} disabled={!email || !password} onClick={handleSubmit} />}
                    <ContainerText>
                        <TextPrimary text="Ainda não possui uma conta? " color={colors.text_primary} />
                        <Links text="Cadastre-se " color={colors.primary} onClick={() => navigate("/register")} />
                    </ContainerText>
                </FormLogin>


            </SectionRight>
        </ContainerPage>
    );
}
