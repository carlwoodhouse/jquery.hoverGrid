/*!
 * jQuery hoverGrid Plugin
 * https://github.com/carlwoodhouse/jquery.hoverGrid
 *
 * Copyright 2012, Carl Woodhouse, Mark Searle
 */
 
(function( $ ){
  $.fn.hoverGrid = function( options ) {  
	var settings = $.extend( {
      'itemClass' : '.item',
	  'zoom' : 1.2,
	  'move' : -20
    }, options);
  
    return this.each(function() {       
		var hoverGrid = $(this);
		
		if(!hoverGrid.is('.hover-grid'))
		{
			hoverGrid.addClass('hover-grid');
		}
		
		 $(hoverGrid).find(settings.itemClass).hover(function () {
			var zoom = settings.zoom;
			var move = settings.move;
			var item = $(settings.itemClass);
			
			if(!item.is('.hover-grid-item'))
			{
				$(hoverGrid).addClass('hover-grid-item');
			}
			
			//Set the width and height according to the zoom percentage
			var width = $(item).width() * zoom;
			var height = $(item).height() * zoom;

			//Move and zoom the image
			$(this).find('img').stop(false, true).stop().animate({ 'width': width, 'height': height, 'top': move, 'left': move }, { duration: 200 });

			//Display the caption
			$(this).find('div.caption').stop(false, true).fadeIn(200);
		},
        function () {
            //Reset the image
            $(this).find('img').stop(false, true).stop().animate({ 'width': $('.item').width(), 'height': $('.item').height(), 'top': '0', 'left': '0' }, { duration: 100 });

            //Hide the caption
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });
    });
  };
})( jQuery );

