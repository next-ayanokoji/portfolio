// 🎵 ================= MUSIC CONTROL =================

// select audio + button
let music = document.getElementById("music-bg");
let btn = document.getElementById("music-toggle");

// set low volume for background vibe
music.volume = 0.1;

// toggle play/pause music
function controlBgMusic() {
    if (music.paused) {
        music.play();                 // play music
        btn.textContent = "🔊";       // change icon
    } else {
        music.pause();                // pause music
        btn.textContent = "🔇";       // change icon
    }
}


// ➕ ================= ADDITION =================

// input fields + result
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addResult = document.getElementById("add-result");

// animation image
let dancers = document.getElementById("dancers");

// function to calculate sum
function add() {
    let sum = Number(num1.value) + Number(num2.value);
    addResult.textContent = sum;

    // show animation after result
    dancers.src = "icons8-party-48.apng.png";
}

// clear result + animation
function refresh() {
    addResult.textContent = "";
    dancers.src = "";
}

// delay function (adds after 0.5 sec)
function addwithdelay() {
    setTimeout(add, 500);
}


// ➖ ================= SUBTRACTION =================

// input fields + result
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let subResult = document.getElementById("sub-result");

// animation image
let dancers2 = document.getElementById("dancers2");

// function to subtract
function subtract() {
    let difference = Number(num3.value) - Number(num4.value);
    subResult.textContent = difference;

    // show animation
    dancers2.src = "icons8-party-48.apng.png";
}


// 🌐 ================= GITHUB BUTTON =================

// open GitHub repo in new tab
function opengithub() {
    window.open("https://github.com/next-ayanokoji", "_blank");
}