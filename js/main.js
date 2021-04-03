document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const event = form.querySelector('[name="event"]');
      const participant = form.querySelector('[name="participant"]');
      const day = form.querySelector('[name="day"]');
      const time = form.querySelector('[name="time"]');
      const id = Date.now();

      const eventObj = {
        event: event.value,
        participant: participant.value,
        day: day.value,
        time: time.value,
        id: id,
      };

      const data = JSON.parse(localStorage.getItem("events"));
      const eventsList = data ? data : [];

      localStorage.setItem("events", JSON.stringify([...eventsList, eventObj]));
      window.history.back();
    });
  }

  function renderEvents() {
    const calendarContainer = document.querySelector("#calendar");
    const membersSelect = document.querySelector("#members");
    const data = JSON.parse(localStorage.getItem("events"));
      data.forEach((i) => {
      const cell = calendarContainer.querySelector(`td[data-day='${i.day}'][data-time='${i.time}']`);
      cell.innerHTML = `<span id='active-event' data-id='${i.id}'><p>${i.event}</p><span class="close"></span></span>`;
      cell.classList.add("active__cell");

      const addMembers = new Option(i.participant, i.participant);
      membersSelect.add(addMembers, undefined);
    });
  }
  renderEvents();

  const eventCell = document.querySelectorAll(".event-cell");
  eventCell.forEach( (i) => {
    i.addEventListener("click", function (e) {
      if (e.target.classList.contains('close')) {
          this.remove();
      }

      const data = JSON.parse(localStorage.getItem("events"));
      const filtered = data.filter( (i) => {
        const cellItem = document.querySelector(`#active-event`);
          if (i.id !== parseInt(cellItem.dataset.id)) {
            console.log(parseInt(cellItem.dataset.id));
            return i;
          };
      });
      localStorage.setItem("events", JSON.stringify(filtered));
    });
  });
});
