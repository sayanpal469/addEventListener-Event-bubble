 function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}




const makeRedButton = document.getElementById('redBtn')

makeRedButton.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = 'red'
}


const makeYellow = document.getElementById('yellowBtn')

makeYellow.onclick = function () {
    document.body.style.backgroundColor = 'yellow'
}



const makeGoldenRodBtn = document.getElementById('goldenRodBtn')

makeGoldenRodBtn.addEventListener('click', makeGoldenRod)

function makeGoldenRod () {
    document.body.style.backgroundColor = 'goldenrod'
}


const makeHotPinkBtn = document.getElementById('hotPinkBtn')


makeHotPinkBtn.addEventListener(
    'click',
    function () {
        document.body.style.backgroundColor = 'hotpink'
    }
)


document.getElementById('lightBlueBtn').addEventListener(
    'click',
    function () {
        document.body.style.backgroundColor = 'lightblue'
    }
)