import React from "react";
import { AlertContainer, Message, Button } from "./styles";
import TextPrimary from "../TextPrimary";

export default function Alert({message, onClick }) {
    return (
        <AlertContainer>
            <Message><TextPrimary size='1rem' text={message} /></Message>
            <Button onClick={onClick}>OK</Button>
        </AlertContainer>
    );

}
