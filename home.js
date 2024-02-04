document.getElementById("home-text").innerHTML += "test"; 

//right now all this does is give me five results 
//i have to get the information from one of them and output it to the user
var url = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Formula_One&limit=5";
//https://www.mediawiki.org/w/api.php?action=parse&format=json&formatversion=2&titles=Pet_door
//https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Formula_One&limit=5

//asyncronous right now and things of that nature and i still have to figure out how to get the articles
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }).catch(error => console.log(error));


/*
fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium&limit=5").then(function(resp) {
    console.log(resp);
    return resp.json()
}).then(function(data) {
    console.log(data);
})
*/
