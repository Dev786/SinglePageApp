window.onload = () => {
    document.getElementById("home").className = "active";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "home.html");
    xhr.setRequestHeader('Content-Type', 'text/html');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById("loadHere").innerHTML = xhr.responseText;
        }
    }
    xhr.send();
};


function load_html(link, id) {
    var active = document.getElementsByClassName("active");
    var xhr = new XMLHttpRequest();
    for (var i = 0; i < active.length; i++) {
        active[i].className = "NONE";
    }
    document.getElementById(id).className = "active";

    xhr.open("GET", link);
    xhr.setRequestHeader('content-type', 'text/html');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById("loadHere").innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}