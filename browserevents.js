// let a = document.getElementsByClassName("container")[0]
// a.onclick = () =>{
//     let b = document.getElementsByTagName("button")[0]
//     b.innerHTML = "Click me"
//     console.log("ello")
// }

let b = document.getElementsByTagName("button")[0]

let x = function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.clientX)  
    console.log(event.clientY)
    console.log(event.type)
}
let y = () =>{alert("Hello 2")}

b.addEventListener('click', x)
b.addEventListener('click', y)

let favn = prompt("fav num")

if (favn == '2'){
    b.removeEventListener('click',x)
    b.removeEventListener('click',y)
}


