document.getElementById("home-text").innerHTML += "test"; 

var url = "https://en.wikipedia.org/w/api.php?action=parse&page=Pet_door&format=json";

fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(JSON.parse(data));  
    }).catch(error => alert(error));