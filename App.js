const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);



yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    //const winners = getWinners();
    //const winnerArr = winners["winners"];

    //winnerArr.for_each((e) => {
    //    document.getElementById("year").innerHTML += `<option value="${e}">${e}</option>`
    //})

    //const response = getYearWinner(desc);
    //const winner = response["winner"];

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://f1-live-motorsport-data.p.rapidapi.com/session/2757');
    xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
    xhr.setRequestHeader('X-RapidAPI-Host', 'f1-live-motorsport-data.p.rapidapi.com');

    xhr.send(data);
    

    if(document.getElementById("yearSelect").innerHTML !== "") {
        document.getElementById("yearSelect").innerHTML = `<div id="${desc}">Winner: ${desc}</div>`;
    }

    
});



