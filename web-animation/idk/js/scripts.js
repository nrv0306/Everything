// Scripts for rows.html

$('.animate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated hinge");
});


$('.ANimate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated swing");
})

$('.Animate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated flip");

}).on('mouseleave', function() {
  $(this).toggleClass("animated flip");
});