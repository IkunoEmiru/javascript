document.write("Hello")
let b = 0
let a = 1
// const sum =(a,b)=>{console.log("running", a+b);a+b}
const fact = (a) =>{
    b=a*(a+1)
    a++
    console.log(a)
    console.log(b)
   
}
console.log(a);

let factintv = setInterval(fact,2000,a)

if (b=2){
    clearInterval(factintv)
    console.log(b )
}

// setTimeout(sum,2000,1,2)
// setInterval(sum,2000,1,2) - doesnt work
// setInterval(() => {
//     alert("Interver")
// }, 2000);



// let a = setTimeout(() => {
//     alert("im inside timeout")    
// }, 2000);

// clearTimeout(a)
// console.log(a)