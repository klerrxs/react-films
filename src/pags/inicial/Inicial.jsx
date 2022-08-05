import { Footer } from "../../componentes/footer/Footer";
import { Cards } from "../../componentes/cards/Cards";
import { useEffect, useState } from "react";
import { Pai, Parte1, Parte2,  } from "./InicialStyle";


function Inicial(){
    const [imagens, setImagens] = useState("Div da imagem");
    

    useEffect(()=>{
        setImagens("Novo valor")
    },[])

    return(
        <Pai>
            <div className="imagemInicial">{imagens}</div>
            <Parte1>
                <h2>Filmes Populares</h2>
            </Parte1>

            <Parte2>
                <Cards/>
            </Parte2>

            <Footer texto="FULLFLIX ® 2022, Todos os direitos reservados. | Home"/>
            
        </Pai>
    )
};

export default Inicial;
