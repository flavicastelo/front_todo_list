import React, { useState, useEffect } from "react";
import { ContainerForm, ContainerPage, ContainerText, FormRegister } from "./styles";
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

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passVerify, setPassVerify] = useState(false);
    const [erroMsg, setErroMsg] = useState('');

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
            if (passVerify) {
                const response = await api.post("/user/createuser", data);
                setName('');
                setEmail('');
                setPassword('');
                navigate("/");
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ContainerPage>
            <ContainerForm>
               <SubHeader />
                <TitleSecundary text="CADASTRE-SE" color={colors.primary} size='1.5rem' />
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
                    <Button text="ENVIAR" textColor="#FFF" bgColor={colors.primary} />
                </FormRegister>
                <ContainerText>
                    <TextPrimary text="Possui uma conta? " color={colors.text_primary} />
                    <Links text="Entre aqui " color={colors.primary} onClick={() => navigate("/")} />
                </ContainerText>
            </ContainerForm>
        </ContainerPage>
    );
}
