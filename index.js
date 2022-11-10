let home = 0;
let guest = 0;
let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

//home score
function homeOne() {
    home += 1;
    homeEl.textContent = home;
}

function homeTwo() {
    home += 2;
    homeEl.textContent = home;
}

function homeThree() {
    home += 3;
    homeEl.textContent = home;
}

// guest score
function guestOne() {
    guest += 1;
    guestEl.textContent = guest;
}

function guestTwo() {
    guest += 2;
    guestEl.textContent = guest;
}

function guestThree() {
    guest += 3;
    guestEl.textContent = guest;
}