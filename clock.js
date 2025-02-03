let b = document.getElementById("clock")

// gives time in milliseconds
// setInterval(() => {
//    b.innerHTML= Date.now() 
// }, 1000);  




const datetime = () =>{
    let a = new Date()
    let f = a.getSeconds()
    let c = a.getMinutes()
    let d = a.getHours()
    let e = a.getDate()
    b.innerHTML = `The Current time is ${d}:${c}:${f}. The current date is ${e}`
}
setInterval(datetime,1000)