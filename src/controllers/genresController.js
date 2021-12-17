const db = require('../database/models')
const path = require('path')

const genresController = {
    list: (req, res) => {
        const genres = db.genres.findAll()
        genres.then(genres => res.render(path.resolve(__dirname, '..', 'views', 'genresList'),{genres:genres}))
        .catch(err => console.log(err))
    },
    detail: (req, res) => {
        const genre = db.genres.findByPk(req.params.id)
        genre.then(genre => res.render(path.resolve(__dirname, '..', 'views', 'genresDetail'),{genre:genre}))
    }
}


module.exports = genresController;