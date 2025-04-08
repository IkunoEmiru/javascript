function loadScript(src,callback){
    let script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Script loaded with SRC: " + src)
        callback(null, src)
    }
    script.onerror = function(){
        console.error("Script threw error with SRC: " + src)
        callback(new Error("SRC not loaded"))
    }
    document.body.appendChild(script)
}

function hello(error, src) {
    if (error){
        console.error(error)
        sendEmergencyMessageToCeo()
        return
    }
    alert("Hello "+ src)    
}
function goodMorning() {
    alert("GM")    
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)