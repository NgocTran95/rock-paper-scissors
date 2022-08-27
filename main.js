const options = [
    'rock',
    'paper',
    'scissors'
]

const notifyYouChoose = document.querySelector('.notification-you-choose')
const notifyCompChoose = document.querySelector('.notification-comp-choose')
const notifyResult = document.querySelector('.notification-result')
const userScoreLabel = document.querySelector('.scores-user')
const compScoreLabel = document.querySelector('.scores-comp')

const userOptions = document.querySelectorAll('.game-option')
let userScore = 0;
let compScore = 0;

userOptions.forEach(userOption => {
    userOption.addEventListener('click', () => {
        let userChoose = userOption.dataset.choose
        let compChoose =  makeCompChoose()

        notifyYouChoose.innerText = `You chose ${userChoose}`
        notifyCompChoose.innerText = `Comp chose ${compChoose}`

        if (userChoose == compChoose) {
            renderScore('draw')
            notifyResult.innerText = 'Draw!'
        } else {
            switch (userChoose) {
                case 'rock':
                    if (compChoose == 'paper') {
                        notifyResult.innerText = 'You Lose!'
                        renderScore('comp') 
                    } else {
                        notifyResult.innerText = 'You Win!'
                        renderScore('user')
                    }
                    break;
                case 'paper':
                    if (compChoose == 'rock') {
                        notifyResult.innerText = 'You Win!'
                        renderScore('user') 
                    } else {
                        notifyResult.innerText = 'You Lose!'
                        renderScore('comp')
                    }
                    break;
                case 'scissors':
                    if (compChoose == 'rock') {
                        notifyResult.innerText = 'You Lose!'
                        renderScore('comp') 
                    } else {
                        notifyResult.innerText = 'You Win!'
                        renderScore('user')
                    }
            }
        }
    })

})

function makeCompChoose () {
    let index = Math.floor(Math.random()*(options.length))
    return options[index]
}

function renderScore(side) {
    if (side == 'user') {
        userScore++
    } else if (side == 'comp') {
        compScore++
    } else if (side == 'draw') {

    }
    userScoreLabel.innerText = userScore
    compScoreLabel.innerText = compScore
}

