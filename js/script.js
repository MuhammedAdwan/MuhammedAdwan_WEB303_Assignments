// create the table
let $table = $('<table/>');
// add the table to the body
$('body').append($table);

// adding h1 before table
$('table').before('<h1>MA || SuperHeros</h1>');

// add thead and tbody to the table
$table.append('<thead></thead>');
$table.append('<tbody></tbody>');
$table.addClass('tb1');

// create the header row
let $headerRow = $('<tr/>').addClass('headerRow');
// add header row to the thead
$('thead').append($headerRow);
// add cells to the header
$headerRow.append('<td>First Name</td>');
$headerRow.append('<td>Last Name</td>');
$headerRow.append('<td>Age</td>');
$headerRow.append('<td>Occupation</td>');
$headerRow.append('<td>Description</td>');

// create search input
$('h1').after('<input/>');
$('input').attr('type', 'text').attr('id', 'search-input').attr('placeholder', 'Search by First Name');

// create filter buttons
$('input').after('<button id="filter-am">A - M (0)</button>');
$('button#filter-am').after('<button id="filter-nz">N - Z (0)</button>');

// get and populate the table with json file info
$.ajax({
    type: 'GET',
    url: 'characters.json', // changed the url from emp to characters.json
    dataType: 'json',
    error: function () {
        $('.tb1').empty().append('<h1>File not Found</h1>');
    },
    success: function (response) {
        // loop through response received
        $.each(response, function (index, value) {
            // create row
            let $row = $('<tr/>').addClass('row');
            // add td to the row
            $row.append($('<td></td>').text(value.firstName));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td></td>').text(value.occupation));
            $row.append($('<td></td>').text(value.description));
            // add the row to the table
            $('tbody').append($row);
        });

        // update filter button counts
        updateFilterCounts();

        // start searching
        let $firstNames = $('tbody td:nth-child(1)');
        let $searchInput = $('#search-input');

        function searchFirstName() {
            let query = $searchInput.val().trim().toLowerCase();
            $firstNames.each(function () {
                let index = 0;
                if (query) {
                    index = $(this).text().trim().toLowerCase().indexOf(query);
                }
                $(this).closest('tr').css({
                    'background-color': index === -1 ? '' : 'darkgreen',
                    'color': index === -1 ? 'black' : 'white'
                });
            });
        }

        if ('oninput' in $searchInput[0]) {
            $searchInput.on('input', searchFirstName);
        } else {
            $searchInput.on('keyup', searchFirstName);
        }

        // filter buttons functionality
        $('#filter-am').on('click', function () {
            filterByLastName('A', 'M');
        });

        $('#filter-nz').on('click', function () {
            filterByLastName('N', 'Z');
        });
    }
});

function filterByLastName(startLetter1, startLetter2) {
    $('tbody tr').each(function () {
        let lastName = $(this).find('td:nth-child(2)').text().trim().toLowerCase();
        let startLetter = lastName.charAt(0);
        if (startLetter >= startLetter1.toLowerCase() && startLetter <= startLetter2.toLowerCase()) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });

    // update filter button counts
    updateFilterCounts();
}

function updateFilterCounts() {
    let countAM = $('#filter-am');
    countAM.text('A - M (' + $('tbody tr:visible').filter(function () {
        let lastName = $(this).find('td:nth-child(2)').text().trim().toLowerCase();
        let startLetter = lastName.charAt(0);
        return startLetter >= 'a' && startLetter <= 'm';
    }).length + ')');

    let countNZ = $('#filter-nz');
    countNZ.text('N - Z (' + $('tbody tr:visible').filter(function () {
        let lastName = $(this).find('td:nth-child(2)').text().trim().toLowerCase();
        let startLetter = lastName.charAt(0);
        return startLetter >= 'n' && startLetter <= 'z';
    }).length + ')');
}