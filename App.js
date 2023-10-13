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

    

    if(document.getElementById("yearSelect").innerHTML !== "") {
        document.getElementById("yearSelect").innerHTML = `<div id="${desc}">Winner: ${desc}</div>`;
    }

});



