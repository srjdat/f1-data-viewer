function onButtonClick() {
    const fun_facts = [
        "F1 pit crews usually change all four tires in under 3 seconds.", 
        "An F1 car costs about $12 to $15 million.",
        "F1 cars can accelerate from 0 to 160 kilometers per hour and brake to zero within 4 seconds",
        "Brake discs can reach 1,000 degrees Celsius",
        "The engine won’t start when it’s cold",           
        "Each car consists of 80,000 components",
        "An F1 engine can be used only for up to seven races",
        "An F1 driver loses four pounds per race",
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
    ];

    const fact = fun_facts[(Math.floor(Math.random() * fun_facts.length))]; 
    document.getElementById("fact").innerHTML = `${fact}`;
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

