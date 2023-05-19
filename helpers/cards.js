function generateMatchupCard(movie, opp){
    let card = document.createElement('div');
    card.className = 'card';

    let body = document.createElement('div');
    body.className = 'card-body';

    card.append(body);

    return card;
}