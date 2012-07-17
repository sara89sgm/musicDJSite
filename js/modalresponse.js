$(document).ready(function() {
	
	


	
	$('a.response-window').click(function() {
		
		alert("popresponse");
		
                //Getting the variable's value from a link 
		var responseBox = $(this).attr('href');

		//Fade in the Popup
		$(responseBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(window).height() - $(responseBox).height() ) / 2; 
		var popMargLeft = ($(window).width() - $(responseBox).width()) / 2; 
	
		$(responseBox).css({ 
			'margin-top' : popMargTop,
			'margin-left' : popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
	
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .response-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
	
	

});
