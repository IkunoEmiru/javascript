let promise = new Promise(function (resolve, reject) {
    alert("I am an alert in promise")
    resolve(56)
})


console.log("Hello");
setTimeout(() => {
    console.log("Hello 2 in 2 sec");
    
}, 2000);

console.log("Hello 3");
console.log(promise);


