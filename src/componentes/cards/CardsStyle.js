import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
height: 100%;
width: 100%;
border: 1px solid #fff;
border-radius: 5px;
text-decoration: none;
:hover{
    cursor: pointer;
    border: 1px solid #8B008B;
}
.infoContainer{
    width: 90%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    height: 20%;
    align-self: center;
    font-size: 2vh;
    color: #FF1493;
}
img{
    width: 100%;
    height: 80%;
}
`

export const Grid = styled(Link)`
display: grid;
justify-content: center;
align-items: center;
min-height: 20vh;
padding: 10vh 0;
width: 80%;
gap: 3vw;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
text-decoration: none;
`

// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `