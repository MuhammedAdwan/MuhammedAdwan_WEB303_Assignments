"use strict";

$(document).ready(function () {
    $('#open-box').on('click', function () {
        $("#box-container").show();
    });

    $('#close').on('click', function () {
        $("#box-container").hide();
    });
    $('.photo-box').removeClass('is-loading');

    // Photo Viewer
    $('#img-container').on({
        mouseover: function () {
            $(this).css({
                "cursor": 'pointer',
                'border-color': 'red'
            });
        },
        mouseout: function () {
            $(this).css({
                "cursor": "default",
                'border-color': 'yellow'
            });
        },
        click: function () {
            let imgURL = $(this).attr('src');
            $('#main-image').fadeOut(500, function () {
                $(this).attr('src', imgURL).fadeIn(500);
            });
        }
    });
});
