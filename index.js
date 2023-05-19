document.addEventListener('DOMContentLoaded', () => {
    let movieForm = document.getElementById('movie-input-form');
    let movieInput = document.getElementById('movie-input');
    let movieFormSubmit = document.getElementById('movie-input-submit');

    renderTable();

    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleMovieSubmit(movieInput.value);
    });
});

let matchups = document.getElementById('matchup-container');

function handleMovieSubmit(movie){
    let opp = generateRandomOpponent(movies, movie);

    let matchup = generateMatchupCard(movie, opp);

    matchups.append(matchup);
}

function renderTable(){
    let tableContainer = document.getElementById('results-card');
    let table = createTable(results);
    tableContainer.append(table);
}