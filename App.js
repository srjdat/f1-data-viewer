const log = console.log;
const yearSelect = document.querySelector(`[id="year"]`);

yearSelect.addEventListener(`change`, (e) => {
    const select = e.target; 
    const desc = select.selectedOptions[0].text;

   alert(desc); 
});

