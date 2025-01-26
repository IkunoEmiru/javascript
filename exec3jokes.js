let a = Math.floor(Math.random()*10)
console.log(a)

const dadJokes = [ "question: What did one pirate say to the other when he beat him at chess?\n answer: Checkmatey"    
 ,"question: Why did I quit my job at the coffee shop the other day?\n answer: It was just the same old grind over and over."    
 ,"question: Why should you never buy anything that has Velcro with it?\n answer: It's a total rip-off."    
 ,"question: What is the most groundbreaking invention of all time?\n answer: The shovel."    
 ,"question: Did you hear about the famous Italian chef that recently died?\n answer: He pasta way."    
 ,"question: What kind of music do astronauts listen to?\n answer: Neptunes."    
 ,"question: What do you call Santa's little helpers?\n answer: Subordinate clauses."    
 ,"question: What's the difference between a hippo and a zippo?\n answer: One is extremely big and heavy, and the other is a little lighter."    
 ,"question: Where did Captain Hook get his hook?\n answer: From the second-hand store."
 ,"question: Why did Shakespeare's wife leave him?\n answer: She got sick of all the drama."
]

let b = document.getElementsByClassName("joke")[0].firstElementChild
console.log(b)
b.innerHTML = dadJokes[a]
    