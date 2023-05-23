const reset = document.querySelector('.reset');
const pod = document.querySelector('.pod');
const input = document.querySelector('.input');
const span = document.querySelector('.span');
const btn = document.querySelector('.btn');
const ques = document.querySelector('.q');
const audioTak = new Audio('/game/tak.mp4')
const audioWin = new Audio('/game/win.mp3')
const audioNope = new Audio('/game/nope.mp3')
const audioNan = new Audio('/game/nan.mp3')
const audioPov = new Audio('/game/povorot.mp3')


const randomNum = function () {
    return Math.floor(Math.random() * 20) + 1;
}

function changeBackgroundColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    pod.style.backgroundColor = randomColor;
}

function decreaseNumber() {
    let currentNumber = parseInt(span.innerHTML);
    if (currentNumber > 0) {
        span.innerHTML = currentNumber - 1;
    } else if (currentNumber === 0) {
        location.reload(true);
    }
}

const randomNumber = randomNum();


btn.addEventListener('click', function () {

    audioTak.play();

    if (isNaN(input.value)) {
        audioNan.play();
        pod.innerHTML = 'Только цифры';
    } else if (input.value === '') {
        audioNan.play();
        pod.innerHTML = 'Введите значение';
    } else if (input.value > 20) {
        audioPov.play();
        pod.innerHTML = 'От 1 до 20';
    } else {
        decreaseNumber()
        result();
    }


    changeBackgroundColor();
    function result() {
        if (randomNumber > parseInt(input.value)) {
            audioNope.play();
            pod.innerHTML = 'Слишком мало';
        } else if (randomNumber < parseInt(input.value)) {
            audioNope.play();
            pod.innerHTML = 'Слишком много';
        } else {
            audioWin.play();
            ques.innerHTML = randomNumber;
            document.body.style.backgroundColor = "green"
            pod.innerHTML = 'Правильно!!!';
        }
    }

});



reset.addEventListener('click', function () {
    location.reload(true);
})





