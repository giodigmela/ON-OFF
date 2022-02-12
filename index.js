var inner = document.getElementById("inner");
var outter = document.getElementById("outter");
var body = document.getElementsByTagName("body")[0];

inner.onclick = function(){

    if(inner.className == "slide"){
        inner.className = "back";
        inner.innerHTML = "ON";
        outter.className = "";
        body.className = "";
    } else{
        inner.className = "slide";
        inner.innerHTML = "OFF";
        outter.className = "off";
        body.className = "off";
    }

};