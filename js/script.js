var waypoint1 = $('#about_us').waypoint({
  handler: function(direction) {
    $('.navbar').addClass('navbar-solid');
  }
})

var waypoint2 = $('.jumbotron').waypoint({
  handler: function(direction) {
    $('.navbar').removeClass('navbar-solid');
  }
})