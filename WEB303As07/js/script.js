$('.thumbnail-anchor').on('click', function(e) {
    e.preventDefault();
    
    var imgSrc = $(this).attr('href');
    
    $('#modal img').attr('src', imgSrc);
    
    $('.active').removeClass('active');
    $(this).addClass('active');
    
    $('#modal').show();
    
  });
  
  // Hide modal on close click  
  $('#modal').on('click', function() {
    $(this).hide();
  })