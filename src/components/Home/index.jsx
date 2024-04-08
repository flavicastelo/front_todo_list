import React, { useState, useEffect, useContext, useRef } from "react";
import { ContainerPage, ContainerText, Image, SectionLeft, SectionRight } from "./styles";
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
import { isLogged, login, setIdUser } from "../../utils/auth";
import AuthContext from "../../context/authProvider";

export default function Home() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroMsg, setErroMsg] = useState('');

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }

    }, []);
    useEffect(() => {
        setErroMsg('');
    }, [email, password]);

    const handleChangeEmail = (event) => {
        console.log(event.target.value);
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
        await api.post("/auth/login", data).then(function (response){
        setAuth({ email, password, token });
        setEmail('');
        setPassword('');
        login(response.data.token);
        setIdUser(response.data.user.user_id);
        navigate("/tasks");
    }).catch(function (error) {
        console.log(error);
        if (!error?.response) {
            setErroMsg('No Server Response');
        } else if (error.response?.status === 400) {
            setErroMsg('Missing Email or Password!');
        } else if (error.response?.status === 401) {
            setErroMsg('Unauthorized');
        } else {
            setErroMsg('Login Failed!');
        }
    });

};
return (
    <ContainerPage>
        <SectionLeft>
            <Image src={image} />
        </SectionLeft>
        <SectionRight>
            <Title />
            <TextPrimary text="Organize sua vida com a ajuda de um to-do list simples e eficiente" />
            <TitleSecundary text="LOGIN" color={colors.primary} size="48px" />
            <form onSubmit={handleSubmit}>
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
                <Button type="submit" text="ENTRAR" textColor="#FFF" bgColor={colors.primary} onClick={handleSubmit}/>
            </form>

            <ContainerText>
                <TextPrimary text="Ainda não possui uma conta? " color={colors.text_primary} size="18px" />
                <Links text="Cadastre-se " color={colors.primary} size="18px" onClick={() => navigate("/register")} />
            </ContainerText>
        </SectionRight>
    </ContainerPage>
);
}
