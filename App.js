const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);
const type = document.querySelector(`[id="type"]`);

var temp = ''; 

type.addEventListener(`change`, (e) => {
    const select = e.target; 
    const description = String(select.selectedOptions[0].text); 

    temp = description;  
});



yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    var url = 'http://ergast.com/api/f1/' + desc;

    if (temp == 'Drivers') {
        url += '/driverStandings.json';
    } else {
        url += '/constructorStandings.json';
    }

    document.getElementById("loading").innerHTML += `${"loading"}`; 
    //alert(url);
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("yearSelect").innerHTML = '';
            const obj = JSON.parse(data); 
            
            if (temp == 'Drivers') {
                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; index++) {
                    const driver = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index];

                    //get the position then their first name, last name, the team they drive for, and the amount of points they have
                    document.getElementById("yearSelect").innerHTML += `<div> ${driver.position + ": " + driver.Driver.givenName + " " + driver.Driver.familyName + ": " + driver.Constructors[0].name + " - " + driver.points}</div>`;
                }
            } else {
                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length; index++) {
                    const constructor = obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[index]; 

                    //get the position, name of the team, and the points 
                    //TODO: maybe get the names of the drivers that drive for them? 
                    document.getElementById("yearSelect").innerHTML += `<div> ${constructor.position + ": " + constructor.Constructor.name + " - " + constructor.points}</div>`;
                }
            }
            console.log(obj);
            document.getElementById("loading").innerHTML = ''; 
        })
});

