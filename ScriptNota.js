// script.js
document.getElementById('searchInput').addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();
    var rows = document.querySelectorAll('#dataTable tbody tr');

    rows.forEach(function(row) {
        var cells = row.querySelectorAll('td');
        var found = false;

        cells.forEach(function(cell) {
            var cellText = cell.textContent.toLowerCase();
            if (cellText.indexOf(searchValue) > -1) {
                found = true;
            }
        });

        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
