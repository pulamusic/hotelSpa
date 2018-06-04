function getHeight() {
  let height = $('section.promo, section.promo-video').height()
  $('#overlay').css({'height': height + 'px'})
}

$(function() {
  getHeight()

  $('#gallery a').on('click', function() {
    let image = $(this).find('img').attr('src')
    let imageSelected = image.split('thumbnail')
    let fullPath = imageSelected[0] + 'fullsize' + imageSelected[1]

    $('#galleryModal #imageContainer').attr('src', fullPath)
  })
})

$(window).resize(function() {
  getHeight()
})

$(document).foundation();
