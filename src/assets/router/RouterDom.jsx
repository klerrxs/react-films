import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../../pags/detalhes/Detalhes";
import Inicial from "../../pags/inicial/Inicial";



export function RouterDom() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial />} />
                <Route path="/detalhe" element={<Detalhes />} />
                {/* <Routes path="*" element={<div>Erro 404 - página não encontrada</div>} /> */}
            </Routes>
        </BrowserRouter>
    )
}