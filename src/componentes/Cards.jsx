import { useEffect, useState } from "react"
import { Pegarfilmes } from "../api/api";

export function Cards() {
    const [filmes, setFilmes] = useState();
    const base_url = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        Pegarfilmes(setFilmes)
    }, [])

    return (
        <div>
            {!filmes ?
            "loading" : <>
            {filmes.map((filme) => {
                return (
                    <div key={filme.id}>
                        <img src={base_url + filme.poster_path} alt='post'></img>
                        <p>{`titulo: ${filme.title}`}</p>
                        <p>{`Nota: ${filme.vote_average}`}</p>
                    </div>
                )

            })}
        </>}
        </div>
    )

}