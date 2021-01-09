var turn = true; //to put one X And another O
var arr = []; //array to check winner
var win = false; // help us if the result tie between x And o

//explain the result AND reset the game  
function finsh3(x1, x2, x3) {
    document.getElementById('A' + x1).style.color = 'red';
    document.getElementById('A' + x2).style.color = 'red';
    document.getElementById('A' + x3).style.color = 'red';
    setTimeout(function() { location.reload(); }, 5000);
}
//check winer when be  (x_o3_3)
function check_winner3() {
    for (var i = 1; i <= 9; i++) {
        arr[i] = document.getElementById('A' + i).innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[1] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh3(1, 2, 3);
    } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[4] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh3(4, 5, 6);
    } else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[7] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[7] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh3(7, 8, 9);
    } else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[1] + " is winner<br> 5 SECEND and will reset";
        win = true;
        finsh3(1, 4, 7);
    } else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[2] + " is winner<br> 5 SECEND and will reset";
        win = true;
        finsh3(2, 5, 8);
    } else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[3] + " is winner<br> 5 SECEND and will reset";
        win = true;
        finsh3(3, 6, 9);
    } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br> player " + arr[1] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh3(1, 5, 9);
    } else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[3] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[3] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh3(3, 5, 7);
    }
}
var count = 0; //help us if the result tie between x And o
function insert3(id) {
    var x = document.getElementById(id);
    if (turn && x.innerHTML == "") {
        let color = document.getElementById('Xcolor').value;
        x.style.color = color;
        x.innerHTML = "X";
        turn = !turn;
    } else if (!turn && x.innerHTML == "") {
        let color = document.getElementById('Ocolor').value;
        x.style.color = color;
        x.innerHTML = "O";
        turn = !turn;

    }
    check_winner3();
    count++;
    if (win == false && count == 9) { equl_game() }
}








function finsh4(x1, x2, x3, x4) {
    document.getElementById('b' + x1).style.color = 'red';
    document.getElementById('b' + x2).style.color = 'red';
    document.getElementById('b' + x3).style.color = 'red';
    document.getElementById('b' + x4).style.color = 'red';
    removeEventListener('click', insert4);

    setTimeout(function() { location.reload(); }, 5000);
}



function check_winner4() {
    for (var i = 1; i <= 16; i++) {
        arr[i] = document.getElementById('b' + i).innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[3] == arr[4] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[2] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh4(1, 2, 3, 4);
    } else if (arr[5] == arr[6] && arr[6] == arr[7] && arr[7] == arr[8] && arr[5] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[5] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh4(5, 6, 7, 8);
    } else if (arr[9] == arr[10] && arr[10] == arr[11] && arr[11] == arr[12] && arr[9] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[9] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh4(9, 10, 11, 12);
    } else if (arr[13] == arr[14] && arr[14] == arr[15] && arr[15] == arr[16] && arr[13] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[13] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh4(13, 14, 15, 16);
    } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] == arr[13] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[1] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh4(1, 5, 9, 13);
    } else if (arr[2] == arr[6] && arr[6] == arr[10] && arr[10] == arr[14] && arr[2] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[2] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh4(2, 6, 10, 14);
    } else if (arr[3] == arr[7] && arr[7] == arr[11] && arr[11] == arr[15] && arr[3] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br> player " + arr[3] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh4(3, 7, 11, 15);
    } else if (arr[4] == arr[8] && arr[8] == arr[12] && arr[12] == arr[16] && arr[4] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[4] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh4(4, 8, 12, 16);
    } else if (arr[1] == arr[6] && arr[6] == arr[11] && arr[11] == arr[16] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[1] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh4(1, 6, 11, 16);
    } else if (arr[4] == arr[7] && arr[7] == arr[10] && arr[10] == arr[13] && arr[4] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[4] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh4(4, 7, 10, 13);
    }

}



function insert4(id) {
    var x = document.getElementById(id);
    if (turn && x.innerHTML == "") {
        let color = document.getElementById('Xcolor').value;
        x.style.color = color;
        x.innerHTML = "X";
        turn = !turn;
    } else if (!turn && x.innerHTML == "") {
        let color = document.getElementById('Ocolor').value;
        x.style.color = color;
        x.innerHTML = "O";
        turn = !turn;

    }
    check_winner4();
    count++;
    if (win == false && count == 16) { equl_game() }
}

function insert5(id) {
    var x = document.getElementById(id);
    if (turn && x.innerHTML == "") {
        let color = document.getElementById('Xcolor').value;
        x.style.color = color;
        x.innerHTML = "X";
        turn = !turn;
    } else if (!turn && x.innerHTML == "") {
        let color = document.getElementById('Ocolor').value;
        x.style.color = color;
        x.innerHTML = "O";
        turn = !turn;;

    }

    check_winner5();
    count++;
    if (win == false && count == 25) { equl_game() }
}





function equl_game() {
    const w = document.getElementById('winner');
    w.innerHTML = "Equel no player is win <br> 3 SECEND and will reset";
    setTimeout(function() { location.reload(); }, 3000);

}








function change_color() {
    let color = document.getElementById('myselect1').value;
    document.body.style.background = color;
}


var star = true;

function start_game3() {
    if (star == true) {
        const start = document.querySelector('#board1')
        start.classList.remove('hidden')
        star = !star
    }
}

function start_game4() {
    if (star == true) {
        const start = document.querySelector('#board2')
        start.classList.remove('hidden')
        star = !star
    }
}


function start_game5() {
    if (star == true) {
        const start = document.querySelector('#board3')
        start.classList.remove('hidden')
        star = !star
    }
}

function restart() { location.reload(); }




function check_winner5() {
    for (var i = 1; i <= 25; i++) {
        arr[i] = document.getElementById(i).innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[3] == arr[4] && arr[4] == arr[5] && arr[1] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[2] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh5(1, 2, 3, 4, 5);
    } else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] == arr[9] && arr[9] == arr[10] && arr[10] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[6] + " is winner <br> 5 SECEND and will reset";
        win = true;
        finsh5(6, 7, 8, 9, 10);
    } else if (arr[11] == arr[12] && arr[12] == arr[13] && arr[13] == arr[14] && arr[14] == arr[15] && arr[15] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[11] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(11, 12, 13, 14, 15);
    } else if (arr[16] == arr[17] && arr[17] == arr[18] && arr[18] == arr[19] && arr[19] == arr[20] && arr[16] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[16] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh5(16, 17, 18, 19, 20);
    } else if (arr[21] == arr[22] && arr[22] == arr[23] && arr[23] == arr[24] && arr[24] == arr[25] && arr[21] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[21] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh5(21, 22, 23, 24, 25);
    } else if (arr[1] == arr[6] && arr[6] == arr[11] && arr[11] == arr[16] && arr[16] == arr[21] && arr[21] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[1] + " is winner<br> 5 SECEND and will reset";
        win = true;

        finsh5(1, 6, 11, 16, 21);
    } else if (arr[2] == arr[7] && arr[7] == arr[12] && arr[12] == arr[17] && arr[17] == arr[22] && arr[22] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br> player " + arr[2] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(2, 7, 12, 17, 22);
    } else if (arr[3] == arr[8] && arr[8] == arr[13] && arr[13] == arr[18] && arr[18] == arr[23] && arr[23] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[3] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(3, 8, 13, 18, 23);
    } else if (arr[4] == arr[9] && arr[9] == arr[14] && arr[14] == arr[19] && arr[19] == arr[24] && arr[24] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[4] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(4, 9, 14, 19, 24);
    } else if (arr[5] == arr[10] && arr[10] == arr[15] && arr[15] == arr[20] && arr[20] == arr[25] && arr[25] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[5] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(5, 10, 15, 20, 25);
    } else if (arr[1] == arr[7] && arr[7] == arr[13] && arr[13] == arr[19] && arr[19] == arr[25] && arr[25] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[7] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(1, 7, 13, 19, 25);
    } else if (arr[5] == arr[9] && arr[9] == arr[13] && arr[13] == arr[17] && arr[17] == arr[21] && arr[21] != "") {
        const w = document.getElementById('winner');
        w.innerHTML = "<br>player " + arr[5] + " is winner <br> 5 SECEND and will reset";
        win = true;

        finsh5(5, 9, 13, 17, 21);
    }

}

function finsh5(x1, x2, x3, x4, x5) {
    document.getElementById(x1).style.color = 'red';
    document.getElementById(x2).style.color = 'red';
    document.getElementById(x3).style.color = 'red';
    document.getElementById(x4).style.color = 'red';
    document.getElementById(x5).style.color = 'red';
    removeEventListener('click', insert5);

    setTimeout(function() { location.reload(); }, 5000);
}