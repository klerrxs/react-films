import styled from "styled-components";
import imagemBg from "../../../src/assets/img/fullflix.jpeg"

export const Parte1 = styled.h2`
    display: flex;
    background-color: #8B008B;
    height: 10vh;
    margin: 1px;
    color: #fff;
    justify-content: center;
    align-items: center;

    h2{
        text-align: center;
        margin: 0 0 0 2vw;
        color: 	#FFFFE0;
    }

`

export const Pai = styled.div`

.imagemInicial{
    background-image: url(${imagemBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    }
    background-color: black;

`
export const Parte2 = styled.div`
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 90vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    color: white;
`