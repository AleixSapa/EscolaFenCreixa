document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es',
        timeZone: 'Europe/Madrid',
        initialView: 'dayGridMonth',
        events: Eventos
    });

    calendar.render();
});