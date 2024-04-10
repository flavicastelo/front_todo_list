import React, { useState, useEffect } from "react";
import { ContainerForm, ContainerPage, ContainerText, FormRegister, PassRegex } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import TitleSecundary from "../TitleSecundary";
import InputText from "../InputText";
import Button from "../Button";
import Links from "../Links";
import { colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import SubHeader from "../SubHeader";
import Alert from "../Alert";
import Loading from "../Loading";

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passVerify, setPassVerify] = useState(false);
    const [erroMsg, setErroMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
        navigate('/');
    };

    useEffect(() => {
        if (password.length > 0) {
            if (password == confirmPass) {
                setPassVerify(true);
            } else {
                setPassVerify(false);
            }
        } 

    }, [password, confirmPass]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password
        }
        try {
            setIsLoading(true);
            if (passVerify && name && email && password && confirmPass) {
                const response = await api.post("/user/createuser", data);
                console.log('cadastrado com sucesso!');
                setIsLoading(false);
                if(response.status === 201){
                    setSuccessMsg('Cadastro feito com sucesso!');
                    setName('');
                    setEmail('');
                    setPassword('');
                    setErroMsg('');
                    handleShowAlert();
                }
                
            } else {
                setErroMsg('Senhas diferentes!');
            }

        } catch (error) {
            console.log(error.response);
            setIsLoading(false);
            if (!error?.response) {
                setErroMsg('No Server Response');
            } else if (error.response.data.error === 'invalid_password') {
                setErroMsg('Padrão de senha inválido!');
            } else if (error.response.data.error === 'invalid_email') {
                setErroMsg('Digite um e-mail válido!');
            } else if (error.response.data.error === 'missing_fields') {
                setErroMsg('Preencha todos os campos!');
            } else {
                setErroMsg('Erro desconhecido');
            }

        }

    }

    return (
        <ContainerPage>
            <ContainerForm>
                <SubHeader />
                <TitleSecundary text="CADASTRE-SE" color={colors.primary} size='1.2rem' />
                <FormRegister onSubmit={handleSubmit}>
                    <InputText
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <InputText
                        placeholder="Email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <InputText
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <InputText
                        placeholder="Confirme a senha"
                        value={confirmPass}
                        onChange={(e) => { setConfirmPass(e.target.value) }}
                    />
                    {erroMsg && <TextPrimary size='0.6rem' text={erroMsg} align='left' color='red' />}
                    {isLoading ? <Loading /> :  <Button text="ENVIAR" textColor="#FFF" bgColor={colors.primary} disabled={!name || !email || !password || !confirmPass} onClick={handleSubmit}/> }
                   
                    {showAlert && (
                        <Alert message={successMsg} onClick={handleCloseAlert} />
                    )}
                </FormRegister>
                <PassRegex>
                    <TextPrimary align='start' text="* No mínimo 8 caracteres" size='0.65rem' />
                    <TextPrimary align='start' text="* Pelo menos 1 letra maiúscula" size='0.65rem' />
                    <TextPrimary align='start' text="* Pelo menos 1 letra minúscula" size='0.65rem' />
                    <TextPrimary align='start' text="* Pelo menos 1 caractere especial" size='0.65rem' />
                    <TextPrimary align='start' text="* Pelo menos 1 número" size='0.65rem' />
                </PassRegex>
                <ContainerText>
                    <TextPrimary text="Possui uma conta? " color={colors.text_primary} />
                    <Links text="Entre aqui " color={colors.primary} onClick={() => navigate("/")} />
                </ContainerText>
            </ContainerForm>
        </ContainerPage>
    );
}
