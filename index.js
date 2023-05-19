document.addEventListener('DOMContentLoaded', () => {
    let movieForm = document.getElementById('movie-input-form');
    let movieInput = document.getElementById('movie-input');
    let movieFormSubmit = document.getElementById('movie-input-submit');

    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleMovieSubmit(movieInput.value);
    });
});

function handleMovieSubmit(movie){
    // generate a card to vote on a matchup
}