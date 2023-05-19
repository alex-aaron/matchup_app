function generateMatchupCard(movie, opp){
    let card = document.createElement('div');
    card.className = 'card matchup';
    card.setAttribute('style', 'width: 30rem');

    let body = document.createElement('div');
    body.className = 'card-body';

    let p = document.createElement('p');
    p.innerHTML = `${movie} vs ${opp}`;

    body.append(p);

    card.append(body);

    return card;
}

