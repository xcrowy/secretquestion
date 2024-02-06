function handleYesClick(){
    var video = document.getElementById("yesVideo");
    video.style.display = 'block';
    video.play();

    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yesButton");
    yesButton.style.display = "none";
    noButton.style.display = "none";

    var h1 = document.getElementById("h1");
    h1.textContent = "HAPPY VALENTINE'S DAY REMI! I LOVE YOU!!"
}

function handleNoClick(){
    var button = document.getElementById("noButton");

    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}