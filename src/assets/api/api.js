// Fazer um pedido para api, para trazer uma certa informação
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

export const PegarDetalhes = (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ac57c76aa7b66833535f4b4aabe014f6&language=pt-BR`)
    .then((resposta) => {
        setState(resposta)
    }).catch((erro) => {
        console.log(erro)
    })
}