//array of facts
const fun_facts = [
    "F1 pit crews usually change all four tires in under 3 seconds.", 
    "An F1 car costs about $12 to $15 million.",
    "F1 cars can accelerate from 0 to 160 kilometers per hour and brake to zero within 4 seconds",
    "Brake discs can reach 1,000 degrees Celsius",
    "The engine won’t start when it’s cold",           
    "Each car consists of 80,000 components",
    "An F1 engine can be used only for up to seven races",
    "An F1 driver loses ten pounds per race",
    "Tires lose up to 0.5 kg per race",
    "F1’s helmet is one of the world’s toughest",
    "Formula 1 cars can go upside down",
    "In 1950 the average age of the drivers was 39",
    "Max Verstappen sets record for wins, winning percentage",
    "F1 hosts three races in one country - United States",
    "Tires Supplied Exclusively By Pirelli",
    "F1 Cars Generate Up To 6Gs While Cornering",
    "There Is A Minimum Combined Weight For Car And Driver",
    "Formule One cars rev up to 20,000 rpm",
    "Jim Clark won the 1963 Belgium Grand Prix while having a broken gearbox",
    "Daniel Ricciardo won the 2018 Monaco Grand Prix while being stuck in 6th gear while being pressured by 4 time world champion Sebastian Vettel",
    "Formula One drivers can learn about any miniscule problems of the car by just driving them",
    "Prost’s first time in an F1 car was a test for McLaren. During his first stint on the track he was so impressive that the team boss, Teddy Meyer, stopped watching and went to get a contract for Prost to sign.",
    "Lewis Hamilton and Michael Schumacher are tied for the most World Driver Championships with 7 titles to their names",
    "The United Kingdom holds the most Formula One World Driver Championships",
    "Ferrari has 16 Constructors' titles and 15 Driver titles",
    "Williams has 9 Constructors' titles and 7 Driver titles",
    "McLaren has 8 Constructors' titles and 12 Driver titles",
    "Max Verstappen had the most consequetive wins in 2023 with 10 consequetive wins",
    "Max Verstappen had the most dominant year winning 19/22 races in 2023",
    "Lewis Hamilton and Jacques Villeneuve have the most wins in their first championship with 4 wins",
    "Lewis Hamilton currently holds the records of most pole positions with 104 poles",
    "Fernando Alonso has the most race entries with 380 entries",
    "Lewis Hamilton and Jacques Villeneuve have the record for Fewest World Championship seasons before their first title sitting at winning their first title on their second season",
    "Sebastian Vettel is the youngest World Drivers' Championship winner"
];

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    const fact = fun_facts[(Math.floor(Math.random() * fun_facts.length))]; 
    document.getElementById("fact").innerHTML = `${fact}`;
});

//just for me to check how many there are
console.log(fun_facts.length);