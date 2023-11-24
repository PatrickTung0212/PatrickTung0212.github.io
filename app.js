
var aboutMe = document.getElementById("AboutMe");
var propict = document.getElementById("propict");

var portfolio = document.getElementById("Portfolio");
var careerTable = document.getElementById("careerTable");

var followBlock = document.getElementById("follow-block");

var leftSidePersonalBtn = document.getElementById("leftSidePersonalBtn");
var leftSidePortfolioBtn = document.getElementById("leftSidePortfolioBtn");
var leftSideCareerBtn = document.getElementById("leftSideCareerBtn");

var aboutMeBtn = document.getElementById("AboutMeBtn");
var portfolioBtn = document.getElementById("PortfolioBtn");
var careerBtn = document.getElementById("CareerBtn");

var isAnimating = false;
var isPlayingMusic = false;
var audio = new Audio("./assets/BGM.mp3");

var closeBtn = document.querySelector(".close-btn");
var followBlock = document.querySelector(".follow-block");

closeBtn.addEventListener("click", function () {
    followBlock.classList.add("hide");
});

function enlargeIcon(icon) {
    icon.classList.toggle('enlarged');
}


document.querySelector('.fixed-mail-icon').addEventListener('click', function () {
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
});

document.querySelector('.fixed-sound-icon').addEventListener("click", function () {

    if (isPlayingMusic == false) {
        audio.play();
        isPlayingMusic = true;
        this.classList.remove("text-black");
    }
    else {
        audio.pause();
        isPlayingMusic = false;
        this.classList.add("text-black");
    }

});



aboutMeBtn.addEventListener("click", function () {
    if (!isAnimating) {
        isAnimating = true;
        disableButtons();

        fadeOut(portfolio, function () {
            fadeIn(aboutMe);
            fadeIn(propict);

            enableButtons();
            isAnimating = false;
        });

        fadeOut(careerTable);
    }

    followBlock.classList.add("hide");

    leftSidePersonalBtn.classList.add("leftgradientButton");
    leftSidePortfolioBtn.classList.remove("leftgradientButton");
    leftSideCareerBtn.classList.remove("leftgradientButton");
});

portfolioBtn.addEventListener("click", function () {
    if (!isAnimating) {
        isAnimating = true;
        disableButtons();
        fadeOut(aboutMe, function () {

            fadeIn(portfolio);

            enableButtons();
            isAnimating = false;
        });

        fadeOut(propict);
        fadeOut(careerTable);
    }

    followBlock.classList.remove("hide");

    leftSidePersonalBtn.classList.remove("leftgradientButton");
    leftSidePortfolioBtn.classList.add("leftgradientButton");
    leftSideCareerBtn.classList.remove("leftgradientButton");
});

careerBtn.addEventListener("click", function () {
    if (!isAnimating) {
        isAnimating = true;
        disableButtons();
        fadeOut(aboutMe, function () {

            fadeIn(careerTable);

            enableButtons();
            isAnimating = false;
        });

        fadeOut(propict);
        fadeOut(portfolio);
    }

    followBlock.classList.add("hide");

    leftSidePersonalBtn.classList.remove("leftgradientButton");
    leftSidePortfolioBtn.classList.remove("leftgradientButton");
    leftSideCareerBtn.classList.add("leftgradientButton");
});

function fadeIn(element) {

    element.style.opacity = 0;
    element.classList.remove("hide");
    var opacity = 0;

    var fadeInAnimation = setInterval(function () {
        opacity += 0.1;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInAnimation);
        }
    }, 50);
}

function fadeOut(element, callback) {
    var opacity = 1;

    var fadeOutAnimation = setInterval(function () {
        opacity -= 0.1;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeOutAnimation);
            element.classList.add("hide");
            callback();
        }
    }, 50);
}

function disableButtons() {
    aboutMeBtn.disabled = true;
    portfolioBtn.disabled = true;
    careerBtn.disableButtons = true;
}

function enableButtons() {
    aboutMeBtn.disabled = false;
    portfolioBtn.disabled = false;
    careerBtn.disableButtons = false;

}



