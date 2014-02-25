/*!
 * jQuery hoverGrid Plugin
 * https://github.com/carlwoodhouse/jquery.hoverGrid
 *
 * Copyright 2012, Carl Woodhouse, Mark Searle
 */
 
(function( $ ){
  $.fn.hoverGrid = function( options ) {  
	var settings = $.extend( {
      'itemClass' : '.item'
    }, options);
  
    return this.each(function() {       
		var hoverGrid = $(this);
		hoverGrid.addClass('hover-grid');
		hoverGrid.find(settings.itemClass).addClass('hover-grid-item');
		
		$(hoverGrid).find(settings.itemClass).hover(function () {
			$(this).find('div.caption').stop(false, true).fadeIn(200);
		},
        function () {
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });
    });
  };
})( jQuery );

