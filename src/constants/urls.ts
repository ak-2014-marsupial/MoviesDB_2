const baseURL: string = 'https://api.themoviedb.org/3';
const posterBaseUrl: string = "https://image.tmdb.org/t/p/w500";
const tokenDefault='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q4Y2VhYWU3M2YzZjQ4NTAwY2NhZjg1OWQ1NDI1YiIsInN1YiI6IjY1NDYyNjUzZmQ0ZjgwMDExZWQwYmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jBQWaAXNNpvH4sunbMKJ2qogMHoPnQd5Lng0EOi_i4';
const token: string = process.env.REACT_APP_TOKEN || tokenDefault;
const api_key: string = process.env.REACT_APP_API_KEY;

const movie = "/movie";
const genre ="/genre"
const urls = {
    movie: {
        base: `discover${movie}`,
        search: `/search${movie}`,
        details: (id: string): string => `${movie}/${id}`,
        byGenreId: (genreId: string): string => `/genre/${genreId}/movies`,
    },
    genre: {
        base: `${genre}/list`,
    },
}

export {
    baseURL,
    posterBaseUrl,
    urls,
    api_key,
    token

}