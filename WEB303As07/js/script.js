 $(document).ready(function () {
  $('.thumbnail-anchor').on('click', function (e) {
    e.preventDefault();

    var imgSrc = $(this).attr('href');

    // Set the size of the loading section
    $('.photo-box').css({
      width: '800px',
      height: '400px',
    });

    // Update the loading section image source and size
    $('.photo-box').removeClass('is-loading');
    $('.photo-box').css('background-image', 'url(' + imgSrc + ')');

    // Show the loading section
    $('.photo-box').addClass('is-loading');

    // Hide the modal window
    $('#modal').hide();

    // Highlight the active thumbnail
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  // Hide the loading section on close click
  $('.close').on('click', function () {
    $('.photo-box').removeClass('is-loading');
  });
});

// Open the modal when the "Open" button is clicked
$('#open-box').on('click', function () {
  $("#box-container").show();
});

// Close the modal when the "Close" button is clicked
$('#close').on('click', function () {
  $("#box-container").hide();
});