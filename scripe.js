document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var eventosJson;
    fetch('assets/json/evento-calendario.json')
        .then(resposta => resposta.json())
        .then(JsonCalendario => {
            eventosJson = JsonCalendario;

            var calendar = new FullCalendar.Calendar(calendarEl, {
                locale: 'es',
                timeZone: 'Europe/Madrid',
                initialView: 'dayGridMonth',
                events: eventosJson
            });

            calendar.render();
        })
        .catch(error => console.log('ha dado el error: ' + error));


});