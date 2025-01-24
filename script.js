
// let rpsarr1 = ("R","P","S")
// let aiGuessShort = rpsarr1[randomNum]

let playAgain = true
let rpsarr = ["Rock", "Paper", "Scissors"]

const rps =()=>{
    let randomNum = Math.floor(Math.random()*3)
    let aiGuess = rpsarr[randomNum]
    let userGuess = prompt("Lets play the game of Rock Paper Scissors. Please enter either Rock/Paper/Scissors")


    if (userGuess==aiGuess){
        playAgain = confirm( `You chose ${userGuess}. The computer also chose ${aiGuess}. It is a draw.\n Do you want to play again?`)
    }
    else if (userGuess == "Rock" && aiGuess == "Paper"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You lose.\n Do you want to play again?.`)
    }
    else if (userGuess == "Paper" && aiGuess == "Rock"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You win.\n Do you want to play again?.`)
    }
    else if (userGuess == "Scissors" && aiGuess == "Paper"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You win.\n Do you want to play again?.`)
    }
    else if (userGuess == "Paper" && aiGuess == "Scissors"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You lose.\n Do you want to play again?.`)
    }
    else if (userGuess == "Rock" && aiGuess == "Scissors"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You win.\n Do you want to play again?.`)
    }
    else if (userGuess == "Scissors" && aiGuess == "Rock"){
        playAgain = confirm( `You chose ${userGuess}. The computer chose ${aiGuess}. You lose.\n Do you want to play again?.`)
    }
    else{
        console.error("Something broke")
        alert("Please enter only from the choices available.")

    }
}

do{
    rps()
}
while(playAgain)
