const yearSelectDriver = document.querySelector(`[id="year"]`);

yearSelectDriver.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    var url = 'http://ergast.com/api/f1/' + desc + '/driverStandings.json';
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("yearSelect").innerHTML = '';
            const obj = JSON.parse(data); 
            
            //for loop to present all the drivers 
            for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; index++) {
                const driver = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index];
                const constructors = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index].Constructors[0].name; 
                document.getElementById("yearSelect").innerHTML += `<div> ${(index+1) + ": " + driver.Driver.givenName + " " + driver.Driver.familyName + " : " + constructors + " - " + driver.points}</div>`;
            }
        })
    
});



