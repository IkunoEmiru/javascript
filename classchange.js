let a = document.getElementById("first")

a.className = "red"
console.log(a.classList)
a.classList.remove("red") // remove class
a.classList.add("red")  // add class
a.classList.toggle("red") // removes if is there, else adds
a.classList.contains("red") // tru false
