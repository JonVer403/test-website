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

function readMoreReload() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
}

let count = 0;

function updateCount() {
    document.getElementById("count").innerHTML = count;
    if (count >= 7000) {
        document.getElementById("secretBut").style.display = "block";
    } else {
        document.getElementById("secretBut").style.display = "none";
    }
}

function updateSaved() {
    let saved = localStorage.getItem("count");
    document.getElementById("saved").innerHTML = saved;
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