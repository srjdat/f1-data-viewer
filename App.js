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

    fetch('http://ergast.com/api/f1/2008/driverStandings')
    .then(res => res.json())
    .then(data => console.log(data))
});



