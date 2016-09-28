$(document).on('ready', function () {
	
	var current = 373;

	$('.skills-slider > .skills-slider__indicator').css('left', current +'px');
	
	function moveSlider(e) {
		e.preventDefault();

		var pos 	= $(e.currentTarget).offset(),
			posX	= e.pageX - pos.left;

		if(posX >= 0 && posX <= $(e.currentTarget).outerWidth()){

			$('.skills-slider > .skills-slider__indicator').css('left', posX+'px');

		}
	}

	$('.skills-slider').on('mousedown', function(e){
		moveSlider(e);
	});

});