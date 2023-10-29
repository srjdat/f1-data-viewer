const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);
const type = document.querySelector(`[id="type"]`);
const xValues = [];
const yValues = [];

var temp = ''; 

type.addEventListener(`change`, (e) => {
    const select = e.target; 
    const description = String(select.selectedOptions[0].text); 

    temp = description;  
});



yearSelect.addEventListener(`change`, (e) => {
    const xValues = [];
    const yValues = [];
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    var url = 'http://ergast.com/api/f1/' + desc;

    if (temp == 'Drivers') {
        url += '/driverStandings.json';
    } else {
        url += '/constructorStandings.json';
    }

    document.getElementById("year-select").innerHTML = `<div class="load-anim">${"loading..."}</div>`; 
    //alert(url);
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("year-select").innerHTML = '';
            const obj = JSON.parse(data); 
            
            //erase the loading thing
            document.getElementById("year-select").innerHTML = `<div class="standings" id="standings"></div>`; 
            if (temp == 'Drivers') {
                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; index++) {
                    const driver = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index];

                    //putting the drivers and the points in an array 
                    xValues[index] = driver.Driver.givenName + " " + driver.Driver.familyName; 
                    yValues[index] = driver.points;

                    //get the position then their first name, last name, the team they drive for, and the amount of points they have
                    document.getElementById("standings").innerHTML += `<div> ${driver.position + ": " + driver.Driver.givenName + " " + driver.Driver.familyName + " - " + driver.points}</div>`;
                }
            } else {
                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length; index++) {
                    const constructor = obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[index]; 

                    //putting the constructors and the points in an array 
                    xValues[index] = constructor.Constructor.name; 
                    yValues[index] = constructor.points; 

                    //get the position, name of the team, and the points 
                    //TODO: maybe get the names of the drivers that drive for them? 
                    document.getElementById("standings").innerHTML += `<div> ${constructor.position + ": " + constructor.Constructor.name + " - " + constructor.points}</div>`;
                }
            }

            const barColors = [
                "#F3A505",
                "#B8B799",
                "#F80000",
                "#8673A1",
                "#7D8471",
                "#E5BE01",
                "#8A9597",
                "#1E2460",
                "#CB2821",
                "#474A51",
                "#922B3E",
                "#343B29",
                "#5D9B9B",
                "#922B3E"
            ];

            document.getElementById("year-select").innerHTML += `<canvas class="my-chart" id="myChart" style="width:100%;max-width:1000px;" size="+2"></canvas>`;
            new Chart("myChart", {
                type: "pie", 
                data: {
                    labels: xValues, 
                    datasets:  [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                }, 
                options: {
                    response: true,
                    title: {
                        display: true, 
                        text: "Points"
                    }
                }
            });
    
        })    
});

