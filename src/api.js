import axios from "axios"

const api = axios.create({baseURL: "https://northcoders-news-7th3.onrender.com/api"})

export const getArticles = () => {
    return api.get("/articles").then(({data}) => {
        return data
    })
}