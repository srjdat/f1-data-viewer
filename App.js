const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);
const type = document.querySelector(`[id="type"]`);
var xValues = [];
var yValues = [];
var desc = ''; 
var temp = ''; 

//type of information selector
type.addEventListener(`change`, (e) => {
    temp = ''; 
    const select = e.target; 
    const description = String(select.selectedOptions[0].text); 

    temp = description;  

    //if you change the type of information you want it'll update instead of you requiring to manually click the year again
    if (desc != '') {
        standings(); 
    }
});

//year selector 
yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    desc = String(select.selectedOptions[0].text);

    if(temp != ''){
        standings(); 
    }
});


//function to get the standings
function standings() {
    xValues = [];
    yValues = [];

    //gets the url for the api call depending on whether you want drivers or constructors
    var url = 'http://ergast.com/api/f1/' + desc;
    if (temp == 'Drivers') {
        url += '/driverStandings.json';
    } else {
        url += '/constructorStandings.json';
    }

    //start the loading animation
    document.getElementById("year-select").innerHTML = `<div class="load-anim"></div>`; 
    //alert(url); //to see if the code even works
    
    //api call
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("year-select").innerHTML = '';
            const obj = JSON.parse(data); 
            
            //erase the loading thing
            document.getElementById("year-select").innerHTML = `<div class="standings" id="standings"></div>`; 
            if (temp == 'Drivers') {
                //title for the standings 
                document.getElementById("standings").innerHTML += `<div class="title"> Driver Standings for ${desc}</div>`;

                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; index++) {
                    const driver = obj.MRData.StandingsTable.StandingsLists[0].DriverStandings[index];

                    //putting the drivers and the points in an array 
                    xValues[index] = driver.Driver.givenName + " " + driver.Driver.familyName; 
                    yValues[index] = driver.points;

                    //get the position then their first name, last name, the team they drive for, and the amount of points they have
                    document.getElementById("standings").innerHTML += `<div> ${driver.position + ". " + driver.Driver.givenName + " " + driver.Driver.familyName + " - " + driver.points} points</div>`;
                }
            } else {
                //title for the standings
                document.getElementById("standings").innerHTML += `<div class="title"> Constructor Standings for ${desc}</div>`;

                //for loop to display all the drivers 
                for (let index = 0; index < obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length; index++) {
                    const constructor = obj.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[index]; 

                    //putting the constructors and the points in an array 
                    xValues[index] = constructor.Constructor.name; 
                    yValues[index] = constructor.points; 

                    //get the position, name of the team, and the points  
                    document.getElementById("standings").innerHTML += `<div> ${constructor.position + ". " + constructor.Constructor.name + " - " + constructor.points} points</div>`;
                }
            }


            //this is for the graph
            const barColors = ["#F3A505","#B8B799","#F80000","#8673A1","#7D8471","#E5BE01","#8A9597","#1E2460","#CB2821","#474A51","#922B3E","#343B29","#5D9B9B","#922B3E","#78C3FB","#16E0BD","#8F8F8F","#316650","#7FB5B5","#826C34","#474A51","#734222","#A18594","#E4A010","#47402E","#721422","#6C7059", "#3E5F8A", "#924E7D", "#015D52"];

            document.getElementById("year-select").innerHTML += `<canvas class="my-chart" id="myChart" style="width:100%;max-width:1000px;height:50%;max-height:900px"></canvas>`;

            Chart.defaults.color = "#D36E70";
            Chart.defaults.borderColor = "#000000";
            new Chart("myChart", {
                type: "pie", 
                data: {
                    labels: xValues, 
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                }, 
                options: {
                    response: true,
                    plugins: {
                        title: {
                            //display: true, 
                            //text: "Points",
                            //color: "#27A260",
                            padding: {
                                top: 10,
                                left: 30
                            },
                            font: {
                                size: 50
                            }
                        }
                    }
                }
            });
    
        })    
}