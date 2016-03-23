jQuery(document).ready(function($){
    
    // jQuery sticky Menu
    
	$(".mainmenu-area").sticky({topSpacing:0});
	
	
	// Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });    
    
    
    // JQUERY FOR SLIDING NAVIGATION 

	$(document).ready(function() {
	$('a[href*=#]').each(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname
	&& this.hash.replace(/#/,'') ) {
	var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	if ($target) {
	var targetOffset = $target.offset().top;
	});
    
    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });    
    
    // Bootstrap ScrollPSY
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    })      
});


	
