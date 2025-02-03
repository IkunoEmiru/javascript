// let x = () =>{
//     let a = "https://www.google.com/search?q=javascript"
//     window.location = a
//     win.focus()
// }

// document.getElementById("Google").addEventListener("click",x)

// const fetchContent = async (url) =>{
//     con = await fetch(url)
//     let a = await con.json()
//     return a
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url));
// }, 3000);

let a = document.getElementById("glowbulb")

const b =() => {a.classList.toggle("bulb")}

setInterval(b,500)