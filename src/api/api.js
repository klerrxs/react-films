
import axios from "axios"

export const Pegarfilmes = (setState) => {
    axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=3eb53d338b58f6d68a0ba68b832600ec&language=pt-BR&page=1`)
        .then((resposta) => {
            setState(resposta.data.results)
        }).catch((erro) => {
            console.log(erro)
        })
}