import { Footer } from "../componentes/Footer";
import { Cards } from "../componentes/Cards";

import { useEffect, useState } from "react";

function Inicial () {
    const [imagens, setImagens] = useState("Div da Minha imagem");

    useEffect(() => {
        setTimeout(() => setImagens("Novo valor Loading..."), 3000)
    }, [])
    return(

        <div>
            <div>{imagens}</div>
            <div>
                <h2>Filmes Populares (div dos cards)</h2>
                <Cards/>
            </div>
        <Footer/>
        </div>

    )
};
export default Inicial;
