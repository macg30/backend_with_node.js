const MongoLib = require('../lib/mongo')

class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies( {tags} ) {
        const query = tags && { tags: { $in: tags }};
        const movies = await this.mongoDB.getAll(this.collection, query)
        return movies || [];
    }

    async getMovie( {movieId} ) {
        console.log(movieId);
        const movie = await this.mongoDB.get(this.collection, movieId)
        return movie || {};
    }
    
    async createMovie( { movie }) {
        console.log(movie)
        const createMovideId = await this.mongoDB.create(this.collection, movie)
        return createMovideId;
    }

    async updateMovie(  { movie, movieId }) {
        const updatedMovieId = await this.mongoDB.update(this.collection,movieId, movie)
        return updatedMovieId;
    }

    async deleteMovie( { movieId }) {
        const deletedMovieId = await this.mongoDB.delete(this.collection,movieId)
        return deletedMovieId;
    }
}

module.exports = MoviesService;


