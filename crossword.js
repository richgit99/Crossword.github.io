// list of letter buttons

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const G = document.getElementById("G");
const H = document.getElementById("H");
const I = document.getElementById("I");
const J = document.getElementById("J");
const K = document.getElementById("K");
const L = document.getElementById("L");
const M = document.getElementById("M");
const N = document.getElementById("N");
const O = document.getElementById("O");
const P = document.getElementById("P");
const Q = document.getElementById("Q");
const R = document.getElementById("R");
const S = document.getElementById("S");
const T = document.getElementById("T");
const U = document.getElementById("U");
const V = document.getElementById("V");
const W = document.getElementById("W");
const X = document.getElementById("X");
const Y = document.getElementById("Y");
const Z = document.getElementById("Z");


// list of crossword buttons 


const col_1_2 = document.getElementById("col_1_2");
const col_1_3 = document.getElementById("col_1_3");
const col_1_4 = document.getElementById("col_1_4");
const col_1_5 = document.getElementById("col_1_5");

const col_2_1 = document.getElementById("col_2_1");
const col_2_2 = document.getElementById("col_2_2");
const col_2_3 = document.getElementById("col_2_3");
const col_2_4 = document.getElementById("col_2_4");
const col_2_5 = document.getElementById("col_2_5");

const col_3_1 = document.getElementById("col_3_1");
const col_3_2 = document.getElementById("col_3_2");
const col_3_3 = document.getElementById("col_3_3");
const col_3_4 = document.getElementById("col_3_4");
const col_3_5 = document.getElementById("col_3_5");

const col_4_1 = document.getElementById("col_4_1");
const col_4_2 = document.getElementById("col_4_2");
const col_4_3 = document.getElementById("col_4_3");
const col_4_4 = document.getElementById("col_4_4");
const col_4_5 = document.getElementById("col_4_5");

// col_5_1 = document.getElementById("col_5_1");
const col_5_2 = document.getElementById("col_5_2");
const col_5_3 = document.getElementById("col_5_3");
const col_5_4 = document.getElementById("col_5_4");
const col_5_5 = document.getElementById("col_5_5");

// last two buttons

const start_button = document.getElementById('start_button');
const reset_button = document.getElementById('reset_button');
const submit_button = document.getElementById("submit_button");
const result_of_game = document.getElementById("result_of_game");
const result_senetence = document.getElementById("result_sentence");
const last_buttons = document.getElementById("last_buttons");


start_button.onclick = function () {

    start_button.remove();

    // var crossword_buttons = [col_1_2, col_1_3, col_1_4, col_1_5, col_2_1, col_2_2, col_2_3, col_2_4, col_2_5, col_3_1, col_3_2, col_3_3, col_3_4, col_3_5, col_4_1, col_4_2, col_4_3, col_4_4, col_4_5, col_5_2, col_5_3, col_5_4, col_5_5];

    var letters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];


    const one = document.getElementById('one');

    letters.forEach(element => {

        var crossword_buttons = [col_1_2, col_1_3, col_1_4, col_1_5, col_2_1, col_2_2, col_2_3, col_2_4, col_2_5, col_3_1, col_3_2, col_3_3, col_3_4, col_3_5, col_4_1, col_4_2, col_4_3, col_4_4, col_4_5, col_5_2, col_5_3, col_5_4, col_5_5];

        element.onclick = function () {
            // alert(element.textContent);


            crossword_buttons.forEach(i => {
                i.onclick = function () {
                    i.textContent = element.textContent;


                    var score = 0;

                    if (col_2_1.textContent == "H" && col_3_1.textContent == "U" && col_4_1.textContent == "G") {


                        score += 1;
                        col_2_1.style.backgroundColor = 'yellow';
                        col_3_1.style.backgroundColor = 'yellow';
                        col_4_1.style.backgroundColor = 'yellow';


                    }

                    if (col_1_2.textContent == "K" && col_2_2.textContent == "O" && col_3_2.textContent == "R" && col_4_2.textContent == "E" && col_5_2.textContent == "A") {
                        score += 1;
                        col_1_2.style.backgroundColor = 'yellow';
                        col_2_2.style.backgroundColor = 'yellow';
                        col_3_2.style.backgroundColor = 'yellow';
                        col_4_2.style.backgroundColor = 'yellow';
                        col_5_2.style.backgroundColor = 'yellow';

                    }

                    if (col_1_3.textContent == "I" && col_2_3.textContent == "S" && col_3_3.textContent == "B" && col_4_3.textContent == "N" && col_5_3.textContent == "S") {
                        score += 1;
                        col_1_3.style.backgroundColor = 'yellow';
                        col_2_3.style.backgroundColor = 'yellow';
                        col_3_3.style.backgroundColor = 'yellow';
                        col_4_3.style.backgroundColor = 'yellow';
                        col_5_3.style.backgroundColor = 'yellow';


                    }

                    if (col_1_4.textContent == "S" && col_2_4.textContent == "N" && col_3_4.textContent == "A" && col_4_4.textContent == "R" && col_5_4.textContent == "K") {

                        score += 1;
                        col_1_4.style.backgroundColor = 'yellow';
                        col_2_4.style.backgroundColor = 'yellow';
                        col_3_4.style.backgroundColor = 'yellow';
                        col_4_4.style.backgroundColor = 'yellow';
                        col_5_4.style.backgroundColor = 'yellow';


                    }

                    if (col_1_5.textContent == "S" && col_2_5.textContent == "I" && col_3_5.textContent == "N" && col_4_5.textContent == "E" && col_5_5.textContent == "S") {

                        score += 1;

                        col_1_5.style.backgroundColor = 'yellow';
                        col_2_5.style.backgroundColor = 'yellow';
                        col_3_5.style.backgroundColor = 'yellow';
                        col_4_5.style.backgroundColor = 'yellow';
                        col_5_5.style.backgroundColor = 'yellow';


                    }

                    if (col_1_2.textContent == "K" && col_1_3.textContent == "I" && col_1_4.textContent == "S" && col_1_5.textContent == "S") {
                        col_1_2.style.backgroundColor = 'yellow';
                        col_1_3.style.backgroundColor = 'yellow';
                        col_1_4.style.backgroundColor = 'yellow';
                        col_1_5.style.backgroundColor = 'yellow';
                        score += 1;
                    }


                    if (col_2_1.textContent == "H" && col_2_2.textContent == "O" && col_2_3.textContent == "S" && col_2_4.textContent == "N" && col_2_5.textContent == "I") {
                        col_2_1.style.backgroundColor = 'yellow';
                        col_2_2.style.backgroundColor = 'yellow';
                        col_2_3.style.backgroundColor = 'yellow';
                        col_2_4.style.backgroundColor = 'yellow';
                        col_2_5.style.backgroundColor = 'yellow';
                        score += 1;
                    }

                    if (col_3_1.textContent == "U" && col_3_2.textContent == "R" && col_3_3.textContent == "B" && col_3_4.textContent == "A" && col_3_5.textContent == "N") {

                        col_3_1.style.backgroundColor = 'yellow';
                        col_3_2.style.backgroundColor = 'yellow';
                        col_3_3.style.backgroundColor = 'yellow';
                        col_3_4.style.backgroundColor = 'yellow';
                        col_3_5.style.backgroundColor = 'yellow';
                        score += 1;

                    }

                    if (col_4_1.textContent == "G" && col_4_2.textContent == "E" && col_4_3.textContent == "N" && col_4_4.textContent == "R" && col_4_5.textContent == "E") {

                        col_4_1.style.backgroundColor = 'yellow';
                        col_4_2.style.backgroundColor = 'yellow';
                        col_4_3.style.backgroundColor = 'yellow';
                        col_4_4.style.backgroundColor = 'yellow';
                        col_4_5.style.backgroundColor = 'yellow';
                        score += 1;

                    }


                    if (col_5_2.textContent == "A" && col_5_3.textContent == "S" && col_5_4.textContent == "K" && col_5_5.textContent == "S") {

                        col_5_2.style.backgroundColor = 'yellow';
                        col_5_3.style.backgroundColor = 'yellow';
                        col_5_4.style.backgroundColor = 'yellow';
                        col_5_5.style.backgroundColor = 'yellow';
                        score += 1;

                    }


                    reset_button.onclick = function () {
                        crossword_buttons.forEach(element => {
                            element.textContent = '';
                            element.style.backgroundColor = null;
                        });
                    }

                    function scored(score) {

                        if (score == 1) {
                            result_of_game.style.padding = '1em';
                            result_of_game.style.fontSize = 'larger';
                            result_of_game.style.fontWeight = 'bold';
                            result_of_game.innerHTML = `Oops you failed, you got only ${score} word right. Better luck next time`;
                        }



                        else if (score == 10) {
                            // alert(result_senetence.innerText);
                            result_of_game.style.fontSize = 'larger';
                            result_of_game.style.padding = '1em';
                            result_of_game.style.fontWeight = 'bold';
                            result_of_game.innerHTML = `Congratulations you won, you got all right`;

                        }

                        else {
                            result_of_game.style.padding = '0.8em';
                            result_of_game.style.fontSize = 'larger';
                            result_of_game.style.fontWeight = 'bold';
                            result_of_game.innerHTML = `Oops you failed, you got ${score} words right. Better luck next time`;
                        }
                    }


                    submit_button.onclick = function () {
                        submit_button.remove();
                        reset_button.remove();

                        scored(score);



                        ;

                    }


                }
            })
        }
    }

    )


}


