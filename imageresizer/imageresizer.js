/*
*
* - Image Resizer
* - Version 0.1
* - Author: Giovanni Di Fiore
* - Email: joopdf@gmail.com
*
*/

(function($){
	
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
	
	function resizeImages()
	{
		var containerClass		= '.image-panel',		
			$images				= $('.image-to-resize');			
		
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

	$(window).load(function(){
		resizeImages();
	});
	
	$(window).resize(debouncer(function(){
		resizeImages();
	}, 600));

}(jQuery));