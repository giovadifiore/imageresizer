/*
*
* - Image Resizer
* - Version 0.2
* - Author: Giovanni Di Fiore
* - Email: giovadf@gmail.com
* - Date: 2012
*
*/

(function($){
	
	// Utility debouncer
	function debouncer( func , timeout )
	{
	   var timeoutID , timeout = timeout || 200;
	   return function () {
	      var scope = this , args = arguments;
	      clearTimeout( timeoutID );
	      timeoutID = setTimeout( function () {
	          func.apply( scope , Array.prototype.slice.call( args ) );
	      } , timeout );
	   }
	}	
	
	// Main resize function
	function resizeImages()
	{
		var containerClass	= '.image-panel',
			$images			= $('.image-to-resize');
		
		$images.each(function()
		{	
			var $obj					= $(this),
				objHeight				= $obj.height(),
				imgObject				= new Image(),
				$imageContainer			= $obj.parents(containerClass),
				imageContainerHeight 	= $imageContainer.height(),
				imageContainerWidth 	= $imageContainer.width();
			
			// loads image
			imgObject.src = $obj.attr('src');
						
			// reset styles
			$obj.css({
				'height': 'auto',
				'margin-top': 0,
				'margin-left': 0,
				'width': '100%'
			});
			
			if ($obj.height()<imageContainerHeight) 
			{
				var k = parseFloat(imgObject.width)/parseFloat(imgObject.height);
				$obj.css({
					'height'	: imageContainerHeight,
					'width'		: parseInt(k*imageContainerHeight)
				});			
				if ($obj.width()>imageContainerWidth)
				{
					$obj.css('margin-left', -1*($obj.width()-imageContainerWidth)/2);
				}			
			} else if ($obj.height()>imageContainerHeight)
				$obj.css('margin-top', -1*(objHeight-imageContainerHeight)/2);				
		});
	}

	// This executes the resizeImages() when all images are loaded
	$(window).load(function(){
		resizeImages();
	});
	
	// The debouncer function is used to defer the resizeImages() when the window resizing is established
	$(window).resize(debouncer(function(){
		resizeImages();
	}, 600));

}(jQuery));