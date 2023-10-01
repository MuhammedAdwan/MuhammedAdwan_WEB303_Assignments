//Using JSON method
function getTeamUsingGetJSON() {
    $.getJSON('team.json', function(data) {
        let htmlContent = '';
        $.each(data.members, function(index, member) {
            htmlContent += `<h2>${member.name}</h2>`;
            htmlContent += `<h5>${member.position}</h5>`;
            htmlContent += `<p>${member.bio}</p>`;
        });
        $('#team').html(htmlContent);
    });
}

//Using ajax method
function getTeamUsingAjax() {
    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        beforeSend: function() {
            $('#team').html('Loading...');
        },
        error: function() {
            $('#team').html('Error: Content could not be retrieved.');
        },
        success: function(data) {
            let htmlContent = '';
            $.each(data.members, function(index, member) {
                htmlContent += `<h2>${member.name}</h2>`;
                htmlContent += `<h5>${member.position}</h5>`;
                htmlContent += `<p>${member.bio}</p>`;
            });

            setTimeout(function() {
                $('#team').html(htmlContent);
            }, 3000);
        }
    });
}

$(document).ready(function() {
    //getTeamUsingGetJSON();
    getTeamUsingAjax();
});
