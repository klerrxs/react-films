import { Footer } from "../../componentes/footer/Footer";
import { Header } from "../../componentes/header/Header";
import { Grid, MainContainer, RigthSide } from "./DetalhesStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { goToHome } from "../../assets/redux/slice";

function Detalhes() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.page.valor2)


    return (
        <MainContainer>
            <Header />
            <Grid>
                <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`} alt="" />
                <RigthSide>
                    <p><b>Titulo:</b> {state.data.title}</p>
                    <p><b>Sinopse:</b> {state.data.overview}</p>
                    <p><b>Data de lançamento:</b> {state.data.release_date}</p>
                    <p><b>Nota:</b> {state.data.vote_average}</p>
                    <Link to="/" onClick={() => dispatch(goToHome())}>Voltar para a home</Link>
                </RigthSide>


            </Grid>
            <Footer texto="FULLFLIX ® 2022, Todos os direitos reservados. | Detalhes"/>
        </MainContainer>
    )
}

export default Detalhes;

// Para pagina utilizar o export default e o nome da function