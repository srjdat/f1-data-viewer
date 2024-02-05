//document.getElementById("home-text").innerHTML += "test"; 

//right now all this does is give me five results 
//i have to get the information from one of them and output it to the user
let url = "https://www.mediawiki.org/w/api.php";
let params = "?action=query"
    + "&prop=extracts"
    + "&exlimit=1"
    + "&exsentences=2"
    + "&titles=Formula_One"
    + "&explaintext=1"
    + "&format=json"
    + "&formatversion=2"
    + "&origin=*";


const wikiurl = url + params; 
//
//https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Formula_One&limit=5

//asyncronous right now and things of that nature and i still have to figure out how to get the articles
fetch(wikiurl)
    .then(function(response){
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
    }).catch(error => console.log(error));

//might have to do this manually

/*
fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium&limit=5").then(function(resp) {
    console.log(resp);
    return resp.json()
}).then(function(data) {
    console.log(data);
})
*/
