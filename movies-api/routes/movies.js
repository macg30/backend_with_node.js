const express = require('express');
const MoviesService = require('../services/movies')

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags});

            throw new Error('Error getting movies');

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        console.log(movieId);
        try {
            const movies = await moviesService.getMovie( {movieId} )

            res.status(200).json({
                data: movies,
                message: 'movies retrieved'
            });
        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body: movie } = req;
        try {
            const createMovideId = await moviesService.createMovie({ movie });

            res.status(201).json({
                data: createMovideId,
                message: 'movie created'
            });
        } catch (err) {
            next(err);
        }
    });

    router.put('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updateMovie({ 
                movieId,
                movie
            });

            res.status(200).json({
                data: updatedMovieId,
                message: 'update movie'
            });
        } catch (err) {
            next(err);
        }
    });

    router.patch('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const patchedMovieId = await moviesService.updateMovie({ 
                movieId,
                movie
            });

            res.status(200).json({
                data: patchedMovieId,
                message: 'patched movie'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId});

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;