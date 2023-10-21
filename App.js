const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);

yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    //const winners = getWinners();
    //const winnerArr = winners["winners"];

    
    //document.getElementById("year").innerHTML += `<option value="${e}">${e}</option>`

    //const response = getYearWinner(desc);
    //const winner = response["winner"]; 
    //givenName, familyName

    var url = 'http://ergast.com/api/f1/' + desc + '/driverStandings.json';
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("yearSelect").innerHTML = '';
            const obj = JSON.parse(data); 
            
            //for loop to present all the drivers 
            for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; index++) {
                const driver = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index].Driver;
                document.getElementById("yearSelect").innerHTML += `<div> ${(index+1) + ": " + driver.givenName + " " + driver.familyName}</div>`;
            }
        })
    
});



