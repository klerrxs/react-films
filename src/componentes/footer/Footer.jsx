import React from "react"
import { FooterStyle } from "./FooterStyled"

export function Footer(props){
    return(
        <FooterStyle>{props.texto}</FooterStyle>
    )
}