const events = [{
nameOfEvent: "test", 
member: "Alex",
day: "fri",
time: "12:00",},
{nameOfEvent: "test", 
    member: "Alex",
    day: "mon",
    time: "12:00",},{
        nameOfEvent: "test", 
        member: "Alex",
        day: "wed",
        time: "11:00",},];

function renderSinglEvent(){

}

function renderEvents(){
    const calendarContainer = document.querySelector("#calendar");
    events.forEach((i) => { 
        const cell = calendarContainer.querySelector(`td[data-day='${i.day}'][data-time='${i.time}']`);
        cell.innerHTML = i.nameOfEvent;
    })
}

renderEvents();

// function createNewEvent(form){
//     console.log(form)
// }

// document.querySelector("#form-new-event").addEventListener("submit", function(e){
//     console.log(e)
// });