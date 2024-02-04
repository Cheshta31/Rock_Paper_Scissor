let user_score=0;
let comp_score=0;
let choices=document.querySelectorAll(".choice");
let u_score=document.querySelector("#user-score");
let c_score=document.querySelector("#comp-score");

//tracking user choice
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

//generate computerChoice
const gencompChoice = () => {
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random() * 3);
    return options[ranIdx];
}

//Game

const playGame = (userChoice) => {
    const compChoice=gencompChoice();
    console.log("User Choice" ,userChoice);
    console.log("Computer Choice" ,compChoice);
    
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock")
        {
        userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
        userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice==="scissors")
        {
        userWin = compChoice === "rock" ? false : true;
        }
    
    showWinner(userWin,userChoice,compChoice);
}
};

//Game was draw
const drawGame =  () => {
    msg.innerText="Game Draw! ";
    msg.style.backgroundColor="#081b31"
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        user_score++;
        u_score.innerText=user_score;
        msg.innerText=`You win! Your choice ${userChoice} beats Computer choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        comp_score++;
        c_score.innerText=comp_score;
        msg.innerText=`You Lose! Computer choice ${compChoice} beats User choice ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

