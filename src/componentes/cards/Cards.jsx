import { useEffect, useState } from "react";
import { PegarDetalhes, Pegarfilmes } from "../../assets/api/api";
import { Container, Grid } from "../cards/CardsStyle";
import { useDispatch } from "react-redux";
import { getMovieDetail } from "../../assets/redux/slice";

// const base_url = 'https://image.tmdb.org/t/p/w500/';
export function Cards() {
    const [filmes, setFilmes] = useState();
    const [detalhes, setDetalhes] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        Pegarfilmes(setFilmes);
    }, []);

    useEffect(() => {
        dispatch(getMovieDetail(detalhes))
    }, [detalhes])

    const onHoverDetail = (e) => {
        PegarDetalhes(e.target.id, setDetalhes)
    }


    return (
        <Grid to="/detalhe">
            {!filmes ? (
                <div>Ainda não</div>
            ) : (
                <>
                    {filmes.map((filme) => {
                        return (
                            <Container key={filme.id} id={filme.id} onMouseEnter={onHoverDetail}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                                    alt=""
                                    id={filme.id}
                                />
                                <div className="infoContainer" id={filme.id}>
                                    <h4>Título: {filme.title}</h4>
                                    <h4>Nota: {filme.vote_average}</h4>
                                </div>
                            </Container>
                        );
                    })}
                </>
            )}
        </Grid>
    );
}
