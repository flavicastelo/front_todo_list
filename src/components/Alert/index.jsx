import React from "react";
import { AlertContainer, Message, Button } from "./styles";

export default function Alert({message, onClick }) {
    return (
        <AlertContainer>
            <Message>{message}</Message>
            <Button onClick={onClick}>OK</Button>
        </AlertContainer>
    );

}
