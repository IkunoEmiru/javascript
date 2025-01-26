// let cTitle = document.getElementById("firstCardTitle") // class can be common, id is unique
// let cTitle1 = document.getElementsByClassName("card-title")
// // cTitle.style.color = "red"
// cTitle1[0].style.color = "red"
// cTitle1[1].style.color = "blue"
// cTitle1[2].style.color = "green"

// document.querySelector(".this").style.color = "pink"
// document.querySelector(".this").style.background = "black"

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.group(id1)

console.log(id1.matches(".box")) //true
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))