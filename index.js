document.addEventListener('DOMContentLoaded', () => {
    let movieForm = document.getElementById('movie-input-form');
    let movieInput = document.getElementById('movie-input');
    let movieFormSubmit = document.getElementById('movie-input-submit');

    console.log(results);
    
    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleMovieSubmit(movieInput.value);
    });
});

function handleMovieSubmit(movie){
    // select random movie to pair against
}