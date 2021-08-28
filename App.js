function showFight(option) {
    fightbtn = document.getElementById("fight-btn");
    fightbtn.style.display = "inline-block";
}

function getSelection(){
    var select = document.getElementById('select-fighter');
    var option = select.options[select.selectedIndex];

    showFight(option);
}

function showInfo(){

    selectionBox = document.getElementById("main-content-selection");
    selectionBox.style.display = "none";

    InfoCard = document.getElementById("information-card");
    InfoCard.style.display = "block";
}

function showSelection(){
    selectionBox = document.getElementById("main-content-selection");
    selectionBox.style.display = "inline-block";

    InfoCard = document.getElementById("information-card");
    InfoCard.style.display = "none";
}