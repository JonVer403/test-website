function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

function startFuncs() {
    readMoreReload()
    startTime()
}

function readMoreReload() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
}

let count = 0;
let secretUnlocked = false;

function updateCount() {
    document.getElementById("count").innerHTML = count;
    if (secretUnlocked == false) {
        if (count >= 100) {
            document.getElementById("secretBut").style.display = "block";
            secretUnlocked = true;
        } else {
            document.getElementById("secretBut").style.display = "none";
        }
    }
}

function unlockSecret() {
    document.getElementById("secretBut").style.display = "block";
    secretUnlocked = true;
}

function updateSaved() {
    let saved = localStorage.getItem("count");
    document.getElementById("saved").innerHTML = saved;
    startTime()
}

function increaseCount() {
    count++;
    updateCount()
}

function increaseCountBy10() {
    count += 10;
    updateCount()
}

function decreaseCount() {
    count--;
    updateCount()
}

function decreaseCountBy10() {
    count -= 10;
    updateCount()
}


function resetCount() {
    count = 0;
    updateCount()
}

function saveCount() {
    localStorage.setItem("count", count);
    updateSaved()
}

function loadCount() {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
        count = Number(saved);
    }
    updateCount()
}

function updateAlarmPic() {
    const alarmPic = document.getElementById("alarmPic");
    if (!alarmPic) return;

    const now = new Date();
    const alarmHour = 12;   // Set the hour (24-hour format)
    const alarmMinute = 12; // Set the minute

    const isAlarmTime =
        now.getHours() === alarmHour &&
        now.getMinutes() === alarmMinute;

    alarmPic.style.display = isAlarmTime ? "block" : "none";
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".clock").innerHTML =  h + ":" + m + ":" + s;
    updateAlarmPic();
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
