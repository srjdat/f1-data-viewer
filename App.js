const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);


yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = String(select.selectedOptions[0].text);

    //alert(desc);

    let element = document.getElementById('' + desc);
    
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});



