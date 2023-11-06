$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        // Modal code goes here
        $('#myModal').css('display', 'block');
        $('#myModal img').attr('src', $content.attr('src'));
    });
    
    // Close the modal when the close button is clicked
    $('.close').click(function () {
        $('#myModal').css('display', 'none');
    });
});
