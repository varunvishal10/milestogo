$(document).ready(function () {
	$('.menu-toggler').on('click',function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
});

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});