$(document).ready(function () {
    // Create and append table to the body
    let $table = $('<table/>');
    $('body').append($table);

    // Add title for the table before the table
    $('table').before('<h1/>');
    $('h1').text('Sorting Table');

    // Add thead and tbody to the table
    $('table').append('<thead/>');
    $('table').append('<tbody/>');
    $('table').addClass('sortable');

    // Create the heading row
    let $headingRow = $('<tr/>');
    $('thead').append($headingRow);

    // Appending th elements to the heading row with anchor tags for sorting
    $headingRow.append($('<th/>').html('<a data-sort="name">Name</a>'));
    $headingRow.append($('<th/>').html('<a data-sort="age">Age</a>'));
    $headingRow.append($('<th/>').html('<a data-sort="occupation">Occupation</a>'));
    $headingRow.append($('<th/>').html('<a data-sort="city">City</a>'));
    $headingRow.append($('<th/>').html('<a data-sort="duration">Projects</a>'));
    $headingRow.append($('<th/>').html('<a data-sort="date">Hired</a>'));

    // AJAX request to retrieve data
    $.ajax({
        type: "get",
        url: "emp.json",
        error: function () {
            $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
        },
        success: function (response) {
            // Loop through response received
            $.each(response, function (index, value) {
                // Create row
                let $row = $('<tr/>').addClass('row');
                // Add td to the row
                $row.append($('<td></td>').text(value.name));
                $row.append($('<td></td>').text(value.age));
                $row.append($('<td></td>').text(value.occupation));
                $row.append($('<td></td>').text(value.city));
                $row.append($('<td></td>').text(value.project));
                $row.append($('<td></td>').text(value.hired));

                // Add rows to table
                $('tbody').append($row);
            });

            // Sort
            var compare = {
                name: function (a, b) {
                    a = a.replace(/^the /i, '');
                    b = b.replace(/^the /i, '');

                    if (a < b) {
                        return -1;
                    } else {
                        return a > b ? 1 : 0;
                    }
                },
                duration: function (a, b) {
                    a = a.split(':');
                    b = b.split(':');

                    a = Number(a[0]) * 60 + Number(a[1]);
                    b = Number(b[0]) * 60 + Number(b[1]);

                    return a - b;
                },
                date: function (a, b) {
                    a = new Date(a);
                    b = new Date(b);

                    return a - b;
                }
            };

            $('.sortable').each(function () {
                var $table = $(this);
                var $tbody = $table.find('tbody');
                var $controls = $table.find('th a');
                var rows = $tbody.find('tr').toArray();
                // Copy or clone the array that is existing
                const deepCopy = [...rows];

                $controls.on('click', function () {
                    var $header = $(this);
                    var order = $header.data('sort');
                    var column;

                    // Remove asc or desc from all other headers
                    $header.siblings().removeClass('ascending descending no-sort');

                    if ($header.is('.ascending') || $header.is('.descending')) {
                        // If selected item has ascending or descending class, reverse contents
                        $header.toggleClass("ascending descending");
                    } else {
                        // If no class, add ascending class
                        $header.addClass('ascending');
                    }

                    if ($header.is('.ascending')) {
                        column = $controls.index(this);
                        rows.sort(function (a, b) {
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            return compare[order](a, b);
                        });
                        $tbody.append(rows);
                    } else if ($header.is('.descending')) {
                        $tbody.append(deepCopy.reverse());
                    } else {
                        $tbody.append(deepCopy);
                    }
                });
            });
        }
    });
});
