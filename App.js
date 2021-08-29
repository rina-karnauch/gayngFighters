function showFight() {
    fightbtn = document.getElementById("fight-btn");
    fightbtn.style.display = "inline-block";
}

function hideFight() {
    fightbtn = document.getElementById("fight-btn");
    fightbtn.style.display = "none";
}

function getSelection() {
    var select = document.getElementById('select-fighter');
    var option = select.options[select.selectedIndex];

    if (option.value) {
        showFight();
    } else {
        hideFight();
    }
}

function showInfo() {

    selectionBox = document.getElementById("main-content-selection");
    selectionBox.style.display = "none";

    InfoCard = document.getElementById("information-card");
    InfoCard.style.display = "block";

    // show picked photo
    var select = document.getElementById('select-fighter');
    var option = select.options[select.selectedIndex];
    var image = document.getElementsByClassName("hero-photo")[0];
    image.src = "images/" + option.value + "-no-background.png";
}

function showSelection() {
    selectionBox = document.getElementById("main-content-selection");
    selectionBox.style.display = "inline-block";

    InfoCard = document.getElementById("information-card");
    InfoCard.style.display = "none";
}