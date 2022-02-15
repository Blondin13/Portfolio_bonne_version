
//---------------------------------------------------------------------Définiton des variables globales---------------------------------------------------------------//
var board = document.getElementById('board');
var new_game_button = document.getElementById('new_game_button');
var win = false;
//var nb_clics = 0;
//var carteDos = '<img src="imgdos/cartedos.jpg">';


new_game_button.addEventListener('click', (e) => {
    new_game();
});

var new_game = () => {
    let nb_row = document.getElementById('nb_row').value;
    let nb_col = document.getElementById('nb_col').value;

    let size = nb_row * nb_col;

    if (size % 2 !== 0) {
        alert('Le nombre de cases n\'est pas paire !');
    }
    else {
        make_board(nb_row, nb_col);
    }
};

var range = (start, end) => {
    var ary = [];
    for (let i = start; i <= end; i++) {
        ary.push(i);
        ary.push(i);
    }
    return ary;
}

var make_board = (nb_row, nb_col) => {
    board.innerHTML = '';

    let cells = range(1, (nb_row * nb_col / 2));

    console.log(cells);

    cells = cells.sort((a, b) => 0.5 - Math.random());

    console.log(cells);

    let index = 0;
    for (let i = 0; i < nb_row; i++) {
        const tr_element = document.createElement('tr');
        for (let j = 0; j < nb_col; j++) {

            //--------------------------------------------------------Construction des éléments de la grille----------------------------------------------------------//


            const td_element = document.createElement('td');
            td_element.className = 'cell';
            const cell_number = cells[index];
            
            const img_element = document.createElement('img');
            img_element.src = `assets/img/${cell_number}.jpg`;
            img_element.hidden = true;  // Cache l'image (trouve comment faire une fontion que quant on clik le hidden devien false et true pour le imgDos_element)
            td_element.appendChild(img_element);

            // Dos de l'image, (image qui recouvre).
            const imgDos_element = document.createElement('img');
            imgDos_element.src = 'assets/imgdos/cartedos.jpg';
            td_element.appendChild(imgDos_element);


            //---------------------------------------------------------Td_element.innerHTML = cell_number;------------------------------------------------------------//


            td_element.setAttribute('data-cell-number', cell_number); //,cell_number2

            //On ajoute un event listener sur chaque cellule pour lancer un tour de jeu à chaque click du joueur
            td_element.addEventListener('click', (e) => {
                let cn = e.currentTarget.getAttribute('data-cell-number'); //, 'data-cell-number2'
                console.log(cn);
                
            });

            //Initialisation du tableau des valeurs de "coups joués"
            tr_element.appendChild(td_element);
            index++;
        }
        board.appendChild(tr_element,);
    }
};

//----------------------------------------------------------- SUITE TESTE --------------------------------------------

//function addEventListener(img_element, imgDos_element)

//if(cell_number) si tu clik sur cell_number 

/*function addFlipped(target) {
    if (!target.classList.contains('flipped')) {
        target.classList.add('flipped');
        board.push(target);
        if (board.length > 1) {
            removeFlipped();
        }
    }


function removeFlipped() {
    if (img_element.length > 2) {
        img_element[0].classList.remove('flipped');
        img_element.shift();
    }
    checkResult();
}

              

//   voir idee monté le niveau de dificulté



function checkResult() {
    if (img_element === img_element) {
        console.log ("une paire")

        }
    }

Timer
setInterval(function() {
    seconds++;
}, 1000);*/