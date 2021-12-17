const db = require('../database/models')
const path = require('path')

const moviesController = {
    list: (req, res) => {
        const movies = db.movies.findAll()
        movies.then(movies => res.render(path.resolve(__dirname, '..', 'views', 'moviesList'), {movies:movies}))
        .catch(err => console.log(err))
    },
    detail: (req, res) => {
        const movie = db.movies.findByPk(req.params.id)
        movie.then(movie => res.render(path.resolve(__dirname, '..', 'views', 'moviesDetail'), {movie:movie}))
        .catch(err => console.log(err))
    },
    new: (req, res) => {
        const movies = db.movies.findAll({
            order:[
                ['release_date', 'DESC']
            ]
        })
        movies.then(movies => res.render(path.resolve(__dirname, '..', 'views', 'newestMovies'), {movies:movies}))
        .catch(err => console.log(err))
    },
    recommended: (req, res) => {
        const movies = db.movies.findAll({
            limit: 5,
            order:[
                ['release_date', 'DESC']
            ]
        })
        movies.then(movies => res.render(path.resolve(__dirname, '..', 'views', 'recommendedMovies'), {movies:movies}))
        .catch(err => console.log(err))
    }
}

module.exports = moviesController;