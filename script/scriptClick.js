let score = 0;
let pointsPerClick = 1;
let autoScore = 0;

function loadSaved() {
    let saved = localStorage.getItem("score");
    if (saved !== null) {
        score = Number(saved);
    }
    updateCount()
    loadAuto()
    loadPointsPerClick()
    loadUpgrades()

}

function loadUpgrades() {
    let clickOnePurchased = localStorage.getItem("clickOnePurchased");
    if (clickOnePurchased === "true") {
        document.getElementById("clickOne").hidden = true;
        document.getElementById("clickOneDropdown").hidden = true;
    }

    let clickTwoPurchased = localStorage.getItem("clickTwoPurchased");
    if (clickTwoPurchased === "true") {
        document.getElementById("clickTwo").hidden = true;
        document.getElementById("clickTwoDropdown").hidden = true;
    }

    let clickThreePurchased = localStorage.getItem("clickThreePurchased");
    if (clickThreePurchased === "true") {
        document.getElementById("clickThree").hidden = true;
        document.getElementById("clickThreeDropdown").hidden = true;
    }

    let autoOnePurchased = localStorage.getItem("autoOnePurchased");
    if (autoOnePurchased === "true") {
        document.getElementById("autoOne").hidden = true;
        document.getElementById("autoOneDropdown").hidden = true;
    }

    let autoTwoPurchased = localStorage.getItem("autoTwoPurchased");
    if (autoTwoPurchased === "true") {
        document.getElementById("autoTwo").hidden = true;
        document.getElementById("autoTwoDropdown").hidden = true;
    }

    let autoThreePurchased = localStorage.getItem("autoThreePurchased");
    if (autoThreePurchased === "true") {
        document.getElementById("autoThree").hidden = true;
        document.getElementById("autoThreeDropdown").hidden = true;
    }
}

function updateCount() {
    document.getElementById("score").innerHTML = score;
    saveCount()
}

function loadAuto() {
    let saved = localStorage.getItem("autoScore");
    if (saved !== null) {
        autoScore = Number(saved);
    }
    updateAuto();
}

function updateAuto() {
    document.getElementById("autoScore").innerHTML = autoScore;
}

function loadPointsPerClick() {
    let saved = localStorage.getItem("pointsPerClick");
    if (saved !== null) {
        pointsPerClick = Number(saved);
    }
}

function saveCount() {
    localStorage.setItem("score", score);
    updateSaved()
}

function updateSaved() {
    let saved = localStorage.getItem("score");
    document.getElementById("score").innerHTML = saved;
}

function increaseCount() {
    score += pointsPerClick;
    updateCount()
}

function clickOneCheck() {
    if (document.getElementById("clickOne").hidden == false) {
        if (score >= 50) {
            document.getElementById("clickOne").hidden = true;
            document.getElementById("clickOneDropdown").hidden = true;
            score -= 50;
            clickActivate()
            localStorage.setItem("clickOnePurchased", true);
        }
    }
}

function clickTwoCheck() {
    if (document.getElementById("clickTwo").hidden == false) {
        if (score >= 200) {
            document.getElementById("clickTwo").hidden = true;
        document.getElementById("clickTwoDropdown").hidden = true;
        score -= 200;
        clickActivate()
        localStorage.setItem("clickTwoPurchased", true);
        }
    }
}

function clickThreeCheck() {
    if (document.getElementById("clickThree").hidden == false) {
        if (score >= 500) {
            document.getElementById("clickThree").hidden = true;
            document.getElementById("clickThreeDropdown").hidden = true;
            score -= 500;
            clickActivate()
            localStorage.setItem("clickThreePurchased", true);
        }
    }
}

function clickActivate() {
    pointsPerClick *= 2;
    localStorage.setItem("pointsPerClick", pointsPerClick);
}

function autoOneCheck() {
    if (document.getElementById("autoOne").hidden == false) {
        if (score >= 150) {
            document.getElementById("autoOne").hidden = true;
            document.getElementById("autoOneDropdown").hidden = true;
            score -= 150;
            autoOneActivate()
            localStorage.setItem("autoOnePurchased", true);
        }
    }
}

function autoTwoCheck() {
    if (document.getElementById("autoTwo").hidden == false) {
        if (score >= 300) {
            document.getElementById("autoTwo").hidden = true;
            document.getElementById("autoTwoDropdown").hidden = true;
            score -= 300;
            autoTwoActivate()
            localStorage.setItem("autoTwoPurchased", true);
        }
    }
}
function autoThreeCheck() {
    if (document.getElementById("autoThree").hidden == false) {
        if (score >= 500) {
            document.getElementById("autoThree").hidden = true;
            document.getElementById("autoThreeDropdown").hidden = true;
            score -= 500;
            autoThreeActivate()
            localStorage.setItem("autoThreePurchased", true);
        }
    }
}

function autoOneActivate() {
    autoScore += 1;
    localStorage.setItem("autoScore", autoScore);
    updateAuto();
    
}

function autoTwoActivate() {
    autoScore += 3;
    localStorage.setItem("autoScore", autoScore);
    updateAuto();
}

function autoThreeActivate() {
    autoScore += 7;
    localStorage.setItem("autoScore", autoScore);
    updateAuto();
}

setInterval(function() {
    score += autoScore;
    updateCount();
}, 1000);

function resetGame() {
    score = 0;
    pointsPerClick = 1;
    autoScore = 0;
    localStorage.removeItem("score");
    localStorage.removeItem("autoScore");
    localStorage.removeItem("pointsPerClick");
    updateCount();
    updateAuto();
    document.getElementById("clickOne").hidden = false;
    localStorage.removeItem("clickOnePurchased");
    document.getElementById("clickOneDropdown").hidden = false;
    document.getElementById("clickTwo").hidden = false;
    localStorage.removeItem("clickTwoPurchased");
    document.getElementById("clickTwoDropdown").hidden = false;
    document.getElementById("clickThree").hidden = false;
    localStorage.removeItem("clickThreePurchased");
    document.getElementById("clickThreeDropdown").hidden = false;
    document.getElementById("autoOne").hidden = false;
    localStorage.removeItem("autoOnePurchased");
    document.getElementById("autoOneDropdown").hidden = false;
    document.getElementById("autoTwo").hidden = false;
    localStorage.removeItem("autoTwoPurchased");
    document.getElementById("autoTwoDropdown").hidden = false;
    document.getElementById("autoThree").hidden = false;
    localStorage.removeItem("autoThreePurchased");
    document.getElementById("autoThreeDropdown").hidden = false;
}