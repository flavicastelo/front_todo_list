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
        setIsLoading(true);
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        }
        await api.post("/auth/login", data).then(function (response) {
            setAuth({ email, password, token });
            setEmail('');
            setPassword('');
            login(response.data.token);
            setIdUser(response.data.user.user_id);
            setUserName(response.data.user.name);
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
                <SubHeader />
                <TitleSecundary text="LOGIN" color={colors.primary}  size='2rem'/>
                <FormLogin >
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
                    {isLoading ? <Loading /> : <Button type="submit" text="ENTRAR" textColor="#FFF" bgColor={colors.primary} onClick={handleSubmit} />}
                    <ContainerText>
                    <TextPrimary text="Ainda não possui uma conta? " color={colors.text_primary}  />
                    <Links text="Cadastre-se " color={colors.primary} onClick={() => navigate("/register")} />
                </ContainerText>
                </FormLogin>

                
            </SectionRight>
        </ContainerPage>
    );
}
