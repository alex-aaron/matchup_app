function createTable(obj){
    let table = createTableTag();
    let thead = createThead();
    let theadRow = createTheadRow();

    table.append(thead);
    table.append(theadRow);
    return table;
}

function createTableTag(){
    let table = document.createElement('table');
    table.className = 'table table-dark';
    return table;
}

function createThead(){
    let thead = document.createElement('thead');
    return thead;
}

function createTheadRow(){
    let row = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerHTML = 'Film';

    let th2 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerHTML = 'Wins';


    let th3 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerHTML = 'Losses';

    let th4 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th1.innerHTML = 'Opponents';

    row.append(th1);
    row.append(th2);
    row.append(th3);
    row.append(th4);

    console.log(row);

    return row;
}