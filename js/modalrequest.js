$(document).ready(function() {
	
	


	
	$('a.request-window').click(function() {
		
		alert("pop");
		
                //Getting the variable's value from a link 
		var requestBox = $(this).attr('href');

		//Fade in the Popup
		$(requestBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(requestBox).height() - 100 ) /2; 
		var popMargLeft = ($(requestBox).width() + 40 ) / 2; 
	
		$(requestBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="maskrequest"></div>');
		$('#maskrequest').fadeIn(300);
	
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.closerequest, #maskrequest').live('click', function() { 
	  $('#maskrequest , .request-popup').fadeOut(300 , function() {
		$('#maskrequest').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
});